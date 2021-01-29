import ws from 'ws';
import { call, cancel, cancelled, delay, fork, put, race, take, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { setAppTheme } from 'store/app';
import { saveDefaultTheme } from 'utils/selectors';
import { ChangeStatus } from 'store/user/actions';
import { END, eventChannel } from 'redux-saga';
import { WsClose, WsConnect } from './actions';

function createSocketChannel(socket: WebSocket) {
  return eventChannel(emit => {
    socket.onopen = () => {
      socket.send(ws.init());
    };

    socket.onmessage = (event) => {
      emit(event.data);
    };

    socket.onclose = () => {
      emit(END);
    };

    const unsubscribe = () => {
      socket.onmessage = null;
    };

    return unsubscribe;
  });
}

function* listenForSocketMessages() {
  let socket;
  let socketChannel;

  try {
    socket = yield call(ws.create);
    socketChannel = yield call(createSocketChannel, socket);

    while (true) {
      const eventList = yield race({
        socket: take(socketChannel),
        status: take(ChangeStatus)
      });

      const event = Object.keys(eventList)[0];

      switch (event) {
        case 'socket': {
          const action = yield call(JSON.parse, eventList[event]);
          yield put(action);
          break;
        }
        case 'status': {
          socket.send(ws.status(eventList[event].payload));
          break;
        }
        default: break;
      }
    }
  } catch (error) {
    console.log('error while connecting', error);
  } finally {
    if (yield cancelled()) {
      socketChannel.close();
      socket.close();
    } else {
      console.log('connection error, trying to reconnect..');
      yield delay(5000);
      yield put(WsConnect());
    }
  }
}

export function* watchWS(){
  const wsConnection = yield fork(listenForSocketMessages);
  yield take(WsClose().type);
  yield cancel(wsConnection);
}

function* saveAppTheme({ payload }: PayloadAction<TAppTheme>){
  yield call(saveDefaultTheme, payload);
}

export function* appSagas() {
  yield takeLatest(setAppTheme.type, saveAppTheme);
  yield takeLatest(WsConnect.type, watchWS);
}