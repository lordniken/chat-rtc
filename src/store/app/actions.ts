import { createAction } from '@reduxjs/toolkit';
import { AppTypes, IApiRequest } from './types';

export const ApiRequest = createAction<IApiRequest>(
  AppTypes.API_REQUEST
);

export const ApiSuccessed = createAction<unknown>(
  AppTypes.API_REQUEST_SUCCESS
);
