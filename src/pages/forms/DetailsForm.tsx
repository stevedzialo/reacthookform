import { yupResolver } from '@hookform/resolvers/yup';
import {Editor, EditorState, convertToRaw } from 'draft-js';
import { memo, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { DetailsFormProps } from '..';
import { detailsFormSchema } from './schemas/detailsFormSchema';
import React from 'react';
import { RTEditor } from '../components/RTEditor';

interface Props {
  saveData: (data: DetailsFormProps) => void;
}

// eslint-disable-next-line react/display-name
export const DetailsForm = memo(({ saveData }: Props) => {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      type: [],
      title: '',
      body: EditorState.createEmpty()
    },
    resolver: yupResolver(detailsFormSchema)
  });

  const onSubmit = (data: DetailsFormProps) => {
    const rawContent = convertToRaw(data.body.getCurrentContent());
    
    const bodyText = rawContent.blocks
      .map(block => block.text)
      .filter(text => text.length > 0)
      .join('\n');

    const finalData = {
      ...data,
      body: bodyText,
    };

    saveData(finalData);
  };
  console.log('DetailsForm')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label>
          <input type="checkbox" {...register('type')} value="Email" />
          Email
        </label>
        <label>
          <input type="checkbox" {...register('type')} value="Push" />
          Push Notification
        </label>
        {errors.type && <p style={{color: 'red'}}>{errors.type.message}</p>}
      </div>
      <div>
        <label>Title</label>
        <input {...register('title', { required: 'Title is required' })} />
        {errors.title && <p style={{color: 'red'}}>{errors.title.message}</p>}
      </div>

      <div>
        <RTEditor control={control}/>   
      </div>

      <button type="submit">Save & Continue</button>
    </form>
  );
}
);