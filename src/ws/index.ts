import { UserStatus } from 'components/Avatar';
import { Action } from 'redux';
import { FetchMessageList, SendMessage } from 'store/chat/actions';
import { IMessage } from 'store/chat/types';
import { ChangeStatus } from 'store/user/actions';
import { getToken } from 'utils/selectors';
import { WsNewUser } from './action';

const withToken = (wsEvent: Action) => (JSON.stringify({ ...wsEvent, token: getToken() }));

export default {
  create: () => new WebSocket(`${process.env.WS_HOST}`),
  init: () => withToken(WsNewUser()),
  status: (status: UserStatus) => withToken(ChangeStatus(status)),
  message: (message: IMessage) => withToken(SendMessage(message)),
  fetch: (id: string) => withToken(FetchMessageList(id)),
};