import { createAction } from '@reduxjs/toolkit';
import { UserTypes } from './types';

export const UserExit = createAction(
  UserTypes.USER_EXIT
);
