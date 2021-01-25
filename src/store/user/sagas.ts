import { put, takeLatest } from 'redux-saga/effects';
import { removeToken } from 'utils/selectors';
import { setUserIsAuth } from '.';
import { UserExit } from './actions';

function* userExit(){
  removeToken();
  yield put(setUserIsAuth(false));
}

export function* userSagas() {
  yield takeLatest(UserExit.type, userExit);
}