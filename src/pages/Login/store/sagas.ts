import { call, put, take, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import sha from 'js-sha512';
import { ApiRequest, ApiResponse } from 'store/app/actions';
import { setAppError, setAppSuccess } from 'store/app';
import { ApiMethods } from 'store/app/types';
import { getToken, removeToken, setToken } from 'utils/selectors';
import { setUserInfo, setUserIsAuth } from 'store/user';
import { IAuthValues, IRegValues } from './types';
import { AuthAction, AuthCheck, RegistrationAction } from './actions';

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
  const { payload: response } = yield take(ApiResponse.type);

  if (response.code === 201) {
    yield put(setAppSuccess(true));
  } else {
    yield put(setAppError(response.error));
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
  const { payload: response } = yield take(ApiResponse.type);
  
  if (response.code === 200) {
    yield call(setToken, response.payload.token);
    yield put(setUserInfo(response.payload));
    yield put(setUserIsAuth(true));
  } else {
    yield put(setAppError(response.error));
  }
}

function* authCheck(){
  const token = getToken();

  if (token){
    const requestPayload = {
      url: 'auth',
      method: ApiMethods.GET
    };
  
    yield put(ApiRequest(requestPayload));
    const { payload: response } = yield take(ApiResponse.type);
    if (response.code === 200) {
      yield put(setUserInfo(response.payload));
      yield put(setUserIsAuth(true));
    } else {
      removeToken();
      yield put(setUserIsAuth(false));
    }
  } else {
    yield put(setUserIsAuth(false));
  }
}

export function* authSagas() {
  yield takeLatest(RegistrationAction.type, registration);
  yield takeLatest(AuthAction.type, authentication);
  yield takeLatest(AuthCheck.type, authCheck);
}