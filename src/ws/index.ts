import { Action } from 'redux';
import { getToken } from 'utils/selectors';
import { WsNewUser } from './action';

const withToken = (wsEvent: Action) => (JSON.stringify({ ...wsEvent, token: getToken() }));

export default {
  create: () => new WebSocket(`${process.env.WS_HOST}`),
  init: () => withToken(WsNewUser()),
};