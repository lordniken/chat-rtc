import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import { IAppState } from '.';

const getAppState = (state: ApplicationState) => state.app;

export const getIsAppFetching = createSelector<ApplicationState, IAppState, boolean>(
  getAppState,
  (app) => app.isFetching,
);

export const getIsAppError = createSelector<ApplicationState, IAppState, null | string>(
  getAppState,
  (app) => app.isError,
);

export const getIsAppSuccessed = createSelector<ApplicationState, IAppState, boolean>(
  getAppState,
  (app) => app.isSuccessed,
);

export const getIsAppLoaded = createSelector<ApplicationState, IAppState, boolean>(
  getAppState,
  (app) => app.isLoaded,
);

export const getAppTheme = createSelector<ApplicationState, IAppState, TAppTheme>(
  getAppState,
  (app) => app.theme,
);

export const getIsWsUp = createSelector<ApplicationState, IAppState, boolean>(
  getAppState,
  (app) => app.wsState,
);
