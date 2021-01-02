import * as Yup from 'yup';

export const loginValidation = Yup.object({
  nickname: Yup.string().required('')
});