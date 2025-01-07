import * as Yup from 'yup';

export const detailsFormSchema = Yup.object().shape({
  type: Yup.array()
    .of(Yup.string())
    .required('Communication type is required'),
  title: Yup.string()
    .max(35, 'Title must be at most 35 characters')
    .required('Title is required'),
  body: Yup.string()
    .min(10, 'Body must be at least 10 characters')
    .required('Body is required'),
});