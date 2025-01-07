import React from 'react';
import { useForm } from 'react-hook-form';
import { TargetFormProps } from '..';
import { yupResolver } from '@hookform/resolvers/yup';
import { getTargetFormSchema } from './schemas/getTargetDormSchema';

interface Props {
  saveData: (data: TargetFormProps) => void;
  selectedTypes: Array<string>;
}

export const TargetForm = ({ saveData, selectedTypes }: Props) => {
  const targetFormSchema = getTargetFormSchema(selectedTypes);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(targetFormSchema),
  });
  const onSubmit = (data: TargetFormProps) => {
    saveData(data);
  };
console.log(selectedTypes)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {selectedTypes.map((type, index) => (
        <div key={index} data-testid={type}>
          <label>{type} Audience *</label>
          <input {...register(type)} />
          {errors[`audience${index + 1}`] && <p>{errors[`audience${index + 1}`]?.message}</p>}
        </div>
      ))}

      <button type="submit">Save & Continue</button>
    </form>
  );
};