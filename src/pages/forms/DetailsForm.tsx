import React, {memo} from 'react';
import { useForm } from 'react-hook-form';
import { DetailsFormProps } from '..';
import { yupResolver } from '@hookform/resolvers/yup';
import { detailsFormSchema } from './schemas/detailsFormSchema';

interface Props {
  saveData: (data: DetailsFormProps) => void;
}

export const DetailsForm = memo(({ saveData }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(detailsFormSchema),
  });

  const onSubmit = (data: DetailsFormProps) => {
    saveData(data);
  };
  console.log('DetailsForm')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Communication Type *</label>
        <select {...register('type')}>
          <option value="">Select...</option>
          <option value="Email">Email</option>
          <option value="Push">Push Notification</option>
        </select>
        {errors.type && <p style={{color: 'red'}}>{errors.type.message}</p>}
      </div>
      <div>
        <label>Title</label>
        <input {...register('title', { required: 'Title is required' })} />
        {errors.title && <p style={{color: 'red'}}>{errors.title.message}</p>}
      </div>

      <div>
        <label>Body</label>
        <textarea {...register('body', { required: 'Body is required' })}></textarea>
        {errors.body && <p style={{color: 'red'}}>{errors.body.message}</p>}
      </div>

      <button type="submit">Save & Continue</button>
    </form>
  );
}
);