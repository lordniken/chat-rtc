import { createAction } from '@reduxjs/toolkit';
import { UserStatus } from 'components/Avatar';
import { UserTypes } from './types';

export const UserExit = createAction(
  UserTypes.USER_EXIT
);

export const ChangeStatus = createAction<UserStatus>(
  UserTypes.CHANGE_STATUS
);

export const StatusChanged = createAction<UserStatus>(
  UserTypes.STATUS_CHANGED
);