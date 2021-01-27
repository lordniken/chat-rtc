import { put, takeLatest } from 'redux-saga/effects';
import { WsClose } from 'store/app/actions';
import { removeToken } from 'utils/selectors';
import { setUserIsAuth } from '.';
import { UserExit } from './actions';

function* userExit(){
  removeToken();
  yield put(setUserIsAuth(false));
  yield put(WsClose());
}

export function* userSagas() {
  yield takeLatest(UserExit.type, userExit);
}