import { createAction } from '@reduxjs/toolkit';
import { UserStatus } from 'components/Avatar';
import { WsTypes } from './types';

export const WsNewUser = createAction(
  WsTypes.USER_LOGIN
);

export const WsChangeStatus = createAction<UserStatus>(
  WsTypes.CHANGE_STATUS
);
