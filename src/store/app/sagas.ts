import ws from 'ws';
import { call, cancel, cancelled, delay, fork, put, race, select, take, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { setAppTheme, setWsConnectionState } from 'store/app';
import { saveDefaultTheme } from 'utils/selectors';
import { ChangeStatus } from 'store/user/actions';
import { ChatBroadcast, FetchMessageList, SendMessage } from 'store/chat/actions';
import { END, eventChannel } from 'redux-saga';
import { WsClose, WsConnect } from './actions';
import { getIsWsUp } from './selectors';

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
        status: take(ChangeStatus),
        message: take(SendMessage),
        fetch: take(FetchMessageList)
      });
      
      const event = Object.keys(eventList)[0];

      switch (event) {
        case 'socket': {
          const action = yield call(JSON.parse, eventList[event]);
          if (action.type === ChatBroadcast.type){
            socket.send(ws.init());
          } else {
            yield put(action);
          }
          break;
        }
        case 'status': {
          socket.send(ws.status(eventList[event].payload));
          break;
        }   
        case 'message': {
          socket.send(ws.message(eventList[event].payload));
          break;
        } 
        case 'fetch': {
          socket.send(ws.fetch(eventList[event].payload));
          break;
        }    
        default: break;
      }
      const isWsConnectionUp = yield select(getIsWsUp);
      if (!isWsConnectionUp) {
        yield put(setWsConnectionState(true));
      }
    }
  } catch (error) {
    console.log('error while connecting', error);
  } finally {
    if (yield cancelled()) {
      socketChannel.close();
      socket.close();
    } else {
      yield put(setWsConnectionState(false));
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