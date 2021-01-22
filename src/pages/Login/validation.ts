import * as Yup from 'yup';

export const loginValidation = Yup.object({
  variant: Yup.string().test(
    'fieldfRequired',
    'Please choose variant of form',
    function check(item) {
      if (item === 'login')
        return (this.parent.auth_login && this.parent.auth_pwd && this.parent.auth_pwd.length > 5);

      return (this.parent.reg_login && this.parent.reg_pwd && this.parent.reg_pwd.length > 5);
    }
  )
});