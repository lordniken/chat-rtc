import { takeLatest } from 'redux-saga/effects';
import { setAppLoaded } from 'store/app';

function* authFetch(){
  yield console.log('AuthSaga loaded');
}

export function* authSagas() {
  yield takeLatest(setAppLoaded.type, authFetch);
}