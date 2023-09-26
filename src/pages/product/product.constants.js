import * as yup from 'yup';

export const schema = yup.object().shape({
  productTitle: yup
    .string()
    .matches(/^[a-zA-Z0-9\s]+$/, 'Product title should not contain special characters')
    .required('Product title is required'),
});
