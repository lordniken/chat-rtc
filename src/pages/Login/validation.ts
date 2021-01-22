import * as Yup from 'yup';

export const loginValidation = Yup.object({
  variant: Yup.string().test(
    'fieldfRequired',
    'Please choose variant of form',
    function check(item) {
      if (item === 'login')
        return (this.parent.auth_login && this.parent.auth_pwd);

      return (this.parent.reg_login && this.parent.reg_pwd);
    }
  ),
});