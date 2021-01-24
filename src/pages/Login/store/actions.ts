import sha from 'js-sha512';
import { ApiRequest } from 'store/app/actions';
import { ApiMethods } from 'store/app/types';
import { createAction } from '@reduxjs/toolkit';
import { IAuthValues, IRegValues, LoginTypes } from './types';
import { setRegistr } from './slices';

export const RegistrationAction = (values: IRegValues) => {
  const { regPwd, ...rest } = values;
  const hashedPwd = sha.sha512(regPwd);

  return ApiRequest({
    url: 'auth/registration',
    method: ApiMethods.PUT,
    body: JSON.stringify(
      {
        ...rest,
        regPwd: hashedPwd
      }
    ),
    successAction: setRegistr
  });
};

export const AuthSuccess = createAction<string>(
  LoginTypes.AUTH_SUCCESS
);

export const AuthAction = (values: IAuthValues) => {
  const { authPwd, ...rest } = values;
  const hashedPwd = sha.sha512(authPwd);

  return ApiRequest({
    url: 'auth',
    method: ApiMethods.POST,
    body: JSON.stringify(
      {
        ...rest,
        authPwd: hashedPwd
      }
    ),
    successAction: AuthSuccess
  });
};
