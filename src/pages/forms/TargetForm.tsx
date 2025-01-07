import React from 'react';
import { useForm } from 'react-hook-form';
import { TargetFormProps } from '..';

interface Props {
  saveData: (data: TargetFormProps) => void;
}

export const TargetForm = ({ saveData }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: TargetFormProps) => {
    console.log(data)
    // saveData(data);
  };
  console.log('TargetForm')

  return (
    <>
      <div>
        <label>Audience</label>
        <input {...register('audience', { required: 'Audience is required' })} />
        {errors.audience && <p>{errors.audience.message}</p>}
      </div>

      <button type="submit" onClick={onSubmit('data')}>Save & Continue</button>
    </>
  );
};