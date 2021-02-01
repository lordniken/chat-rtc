import { createAction } from '@reduxjs/toolkit';
import { ChatTypes, IMessage } from './types';

export const ChatBroadcast = createAction(
  ChatTypes.CHAT_BROADCAST
);

export const SendMessage = createAction<IMessage>(
  ChatTypes.SEND_MESSAGE
);

export const FetchMessageList = createAction<string>(
  ChatTypes.FETCH_MESSAGES
);