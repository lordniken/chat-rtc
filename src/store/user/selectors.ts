import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import { IUserState } from '.';

const getUserState = (state: ApplicationState) => state.user;

export const getIsAuth = createSelector<ApplicationState, IUserState, boolean>(
  getUserState,
  (state) => state.isAuth,
);