export interface IRegValues {
  regLogin: string;
  regPwd: string;
  avatar: string;
}

export interface IAuthValues {
  authLogin: string;
  authPwd: string;
}

export enum LoginTypes {
  AUTH_SUCCESS = '@login/AUTH_SUCCESS'
}