import { call, put, take, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import sha from 'js-sha512';
import { ApiRequest, ApiSuccessed } from 'store/app/actions';
import { setAppSuccess } from 'store/app';
import { ApiMethods } from 'store/app/types';
import { setToken } from 'utils/selectors';
import { setUserInfo, setUserIsAuth } from 'store/user';
import { IAuthValues, IRegValues } from './types';
import { AuthAction, RegistrationAction } from './actions';

function* registration({ payload }: PayloadAction<IRegValues>){
  const { regPwd, ...rest } = payload;
  const hashedPwd = yield call(sha.sha512, regPwd);
  const requestPayload = {
    url: 'auth/registration',
    method: ApiMethods.PUT,
    body: JSON.stringify(
      {
        ...rest,
        regPwd: hashedPwd
      }
    )
  };

  yield put(ApiRequest(requestPayload));
  const { payload: response } = yield take(ApiSuccessed.type);

  if (response === 'USER_CREATED'){
    yield put(setAppSuccess(true));
  }
}

function* authentication({ payload }: PayloadAction<IAuthValues>){
  const { authPwd, ...rest } = payload;
  const hashedPwd = yield call(sha.sha512, authPwd);
  const requestPayload = {
    url: 'auth',
    method: ApiMethods.POST,
    body: JSON.stringify(
      {
        ...rest,
        authPwd: hashedPwd
      }
    )
  };

  yield put(ApiRequest(requestPayload));
  const { payload: response } = yield take(ApiSuccessed.type);

  yield call(setToken, response.token);
  yield put(setUserInfo(response));
  yield put(setUserIsAuth(true));
}

export function* authSagas() {
  yield takeLatest(RegistrationAction.type, registration);
  yield takeLatest(AuthAction.type, authentication);
}