import React from 'react';
import { useForm } from 'react-hook-form';
import { ScheduleFormProps } from '..';

interface Props {
  saveData: (data: ScheduleFormProps) => void;
}

export const ScheduleForm = ({ saveData }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: ScheduleFormProps) => {
    saveData(data);
  };
  console.log('ScheduleForm')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Date</label>
        <input type="date" {...register('date', { required: 'Date is required' })} />
        {errors.date && <p>{errors.date.message}</p>}
      </div>

      <div>
        <label>Time</label>
        <input type="time" {...register('time', { required: 'Time is required' })} />
        {errors.time && <p>{errors.time.message}</p>}
      </div>

      <button type="submit">Save & Continue</button>
    </form>
  );
};