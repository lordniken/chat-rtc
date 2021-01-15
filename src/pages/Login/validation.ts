import * as Yup from 'yup';

export const loginValidation = Yup.object({
  username: Yup.string().required('')
});