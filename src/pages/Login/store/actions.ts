import { createAction } from '@reduxjs/toolkit';
import { IAuthValues, IRegValues, LoginTypes } from './types';

export const RegistrationAction = createAction<IRegValues>(
  LoginTypes.REG_FETCH
);

export const AuthAction = createAction<IAuthValues>(
  LoginTypes.AUTH_SUCCESS
);

export const AuthCheck = createAction(
  LoginTypes.AUTH_CHECK
);