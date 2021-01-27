import { authSagas } from 'pages/Login/store/sagas';
import { all } from 'redux-saga/effects';
import { appSagas } from './app/sagas';
import { chatSagas } from './chat/sagas';
import { userSagas } from './user/sagas';

export const rootSaga = function* root() {
  yield all([
    appSagas(),
    authSagas(),
    userSagas(),
    chatSagas()
  ]);  
};
