import { put, takeLatest } from 'redux-saga/effects';
import { SocketClose } from 'store/chat/actions';
import { removeToken } from 'utils/selectors';
import { setUserIsAuth } from '.';
import { UserExit } from './actions';

function* userExit(){
  removeToken();
  yield put(setUserIsAuth(false));
  yield put(SocketClose());
}

export function* userSagas() {
  yield takeLatest(UserExit.type, userExit);
}