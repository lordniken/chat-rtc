import { call, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { setAppTheme } from 'store/app';
import { saveDefaultTheme } from 'utils/selectors';

function* saveAppTheme({ payload }: PayloadAction<TAppTheme>){
  yield call(saveDefaultTheme, payload);
}

export function* appSagas() {
  yield takeLatest(setAppTheme.type, saveAppTheme);
}