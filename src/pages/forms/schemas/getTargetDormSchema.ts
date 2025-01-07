import * as Yup from 'yup';

export const getTargetFormSchema = (selectedTypes: Array<string>) => Yup.object().shape(
  selectedTypes.reduce((acc: { [key: string]: Yup.StringSchema }, type, index) => {
    acc[type] = Yup.string().required(`${type} audience is required`);

    return acc;
  }, {})
);