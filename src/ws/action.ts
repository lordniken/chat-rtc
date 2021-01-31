import { createAction } from '@reduxjs/toolkit';
import { WsTypes } from './types';

export const WsNewUser = createAction(
  WsTypes.USER_LOGIN
);
