import * as Yup from 'yup';

export const loginValidation = Yup.object({
  variant: Yup.string().test(
    'fieldfRequired',
    'Please choose variant of form',
    function check(item) {
      if (item === 'login')
        return (
          this.parent.authLogin
          && this.parent.authPwd 
          && this.parent.authPwd.length > 5
        );

      return (
        this.parent.regLogin 
        && /^[A-Za-z0-9]+$/.test(this.parent.regLogin) 
        && this.parent.regPwd 
        && this.parent.regPwd.length > 5
      );
    }
  )
});