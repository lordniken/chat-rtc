import * as Yup from 'yup';

export const messageValidation = Yup.object({
  message: Yup.string().required('')
});