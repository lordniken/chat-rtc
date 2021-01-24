import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AuthSuccess } from 'pages/Login/store/actions';
import { setToken } from 'utils/selectors';
import { AuthProps } from './types';
import { setUserInfo, setUserIsAuth } from '.';

function* authSuccess({ payload }: PayloadAction<AuthProps>){
  yield call(setToken, payload.token);
  yield put(setUserInfo(payload));
  yield put(setUserIsAuth(true));
}

export function* userSagas() {
  yield takeLatest(AuthSuccess.type, authSuccess);
}