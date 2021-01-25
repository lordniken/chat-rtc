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
  REG_FETCH = '@auth/REG_FETCH',
  REG_SUCCESS = '@auth/REG_SUCCESS',
  AUTH_SUCCESS = '@auth/AUTH_SUCCESS',
  AUTH_CHECK = '@auth/AUTH_CHECK'
}