import { authSagas } from 'pages/Login/store/sagas';
import { all } from 'redux-saga/effects';

export const rootSaga = function* root() {
  yield all([
    authSagas(),
  ]);
};
