import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import { IUserState } from '.';
import { IUserInfo } from './types';

const getUserState = (state: ApplicationState) => state.user;

export const getIsAuth = createSelector<ApplicationState, IUserState, boolean | null>(
  getUserState,
  (state) => state.isAuth,
);

export const getUserInfo = createSelector<ApplicationState, IUserState, IUserInfo>(
  getUserState,
  (state) => ({ 
    username: state.username,
    avatar: state.avatar,
    status: state.status
  } as IUserInfo)
);