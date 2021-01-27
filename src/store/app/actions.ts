import { createAction } from '@reduxjs/toolkit';
import { AppTypes, IApiRequest } from './types';

export const ApiRequest = createAction<IApiRequest>(
  AppTypes.API_REQUEST
);

export const ApiResponse = createAction<unknown>(
  AppTypes.API_RESPONSE
);

export const WsConnect = createAction(
  AppTypes.WS_CONNECT
);

export const WsClose = createAction(
  AppTypes.WS_CLOSE
);