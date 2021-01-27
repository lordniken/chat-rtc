import { createAction } from '@reduxjs/toolkit';
import { ChatTypes } from './types';

export const WsConnect = createAction(
  ChatTypes.WS_CONNECT
);

export const SocketEvent = createAction(
  ChatTypes.WS_EVENT
);

export const SocketClose = createAction(
  ChatTypes.WS_CLOSE
);
