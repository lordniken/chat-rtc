import ws from 'global/ws';
import { END, eventChannel } from 'redux-saga';
import { call, cancel, cancelled, fork, put, take, takeLatest } from 'redux-saga/effects';
import { getToken } from 'utils/selectors';
import { SocketClose, WsConnect } from './actions';

function createSocketChannel(socket: WebSocket) {
  return eventChannel(emit => {
    socket.onopen = () => {
      socket.send('HELLO FROM CLIENT!');
    };

    socket.onmessage = (event) => {
      socket.send('OK!');
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
    socket = yield call(ws);
    socketChannel = yield call(createSocketChannel, socket);

    while (true) {
      const payload = yield take(socketChannel);

    }
  } catch (error) {
    console.log('error while connecting', error);
  } finally {
    if (yield cancelled()) {
      socketChannel.close();
      socket.close();
    } else {
      console.log('connection error, trying to reconnect..');
      yield put(WsConnect());
    }
  }
}


export function* watchWS(){
  const wsConnection = yield fork(listenForSocketMessages);
  yield take(SocketClose().type);
  yield cancel(wsConnection);
}

export function* chatSagas() {
  yield takeLatest(WsConnect.type, watchWS);
}