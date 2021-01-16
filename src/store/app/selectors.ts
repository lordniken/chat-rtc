import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import { IAppState } from '.';

const getUserState = (state: ApplicationState) => state.app;

export const getIsAppFetching = createSelector<ApplicationState, IAppState, boolean>(
  getUserState,
  (app) => app.isFetching,
);

export const getIsAppError = createSelector<ApplicationState, IAppState, null | string>(
  getUserState,
  (app) => app.isError,
);

export const getIsAppSuccessed = createSelector<ApplicationState, IAppState, boolean>(
  getUserState,
  (app) => app.isSuccessed,
);

export const getIsAppLoaded = createSelector<ApplicationState, IAppState, boolean>(
  getUserState,
  (app) => app.isLoaded,
);

export const getAppTheme = createSelector<ApplicationState, IAppState, TAppTheme>(
  getUserState,
  (app) => app.theme,
);