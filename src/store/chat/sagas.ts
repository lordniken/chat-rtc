import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { ApiRequest } from 'store/app/actions';
import { ApiMethods } from 'store/app/types';
import { SendVoice, SendImage } from './actions';
import { IMedia } from './types';

function* SendMediaSaga({ payload }: PayloadAction<IMedia>){
  const formData  = new FormData();
  Object.keys(payload).forEach(e => formData.append(e, payload[e as keyof IMedia]));

  const requestPayload = {
    url: 'media/image',
    method: ApiMethods.POST,
    body: formData
  };

  yield put(ApiRequest(requestPayload));
}

function* SendVoiceSaga({ payload }: PayloadAction<IMedia>){
  const formData  = new FormData();
  Object.keys(payload).forEach(e => formData.append(e, payload[e as keyof IMedia]));

  const requestPayload = {
    url: 'media/voice',
    method: ApiMethods.POST,
    body: formData
  };

  yield put(ApiRequest(requestPayload));
}

export function* chatSagas() {
  yield takeLatest(SendImage.type, SendMediaSaga);
  yield takeLatest(SendVoice.type, SendVoiceSaga);
}