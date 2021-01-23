import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import { ILoginState } from './slices';

const getLoginState = (state: ApplicationState) => state.login;

export const getIsRegistr = createSelector<ApplicationState, ILoginState, boolean>(
  getLoginState,
  (app) => app.isSuccessRegister
);