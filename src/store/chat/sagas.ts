import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { ApiRequest } from 'store/app/actions';
import { ApiMethods } from 'store/app/types';
import { SendMedia } from './actions';
import { IMedia } from './types';

function* sendMedia({ payload }: PayloadAction<IMedia>){
  const formData  = new FormData();
  Object.keys(payload).forEach(e => formData.append(e, payload[e as keyof IMedia]));

  const requestPayload = {
    url: 'media',
    method: ApiMethods.POST,
    body: formData
  };

  yield put(ApiRequest(requestPayload));
}

export function* chatSagas() {
  yield takeLatest(SendMedia.type, sendMedia);
}