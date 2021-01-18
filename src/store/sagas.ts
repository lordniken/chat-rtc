import { authSagas } from 'pages/Login/store/sagas';
import { all } from 'redux-saga/effects';
import { appSagas } from './app/sagas';

export const rootSaga = function* root() {
  yield all([
    authSagas(),
    appSagas(),
  ]);
};
