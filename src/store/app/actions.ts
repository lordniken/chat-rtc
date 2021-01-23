import { createAction } from '@reduxjs/toolkit';
import { AppTypes, IApiRequest } from './types';

export const ApiRequest = createAction<IApiRequest>(
  AppTypes.API_REQUEST
);
