import { createAction } from '@reduxjs/toolkit';
import { ChatTypes, FetchMessagesType, IMessage } from './types';

export const ChatBroadcast = createAction(
  ChatTypes.CHAT_BROADCAST
);

export const SendMessage = createAction<IMessage>(
  ChatTypes.SEND_MESSAGE
);

export const FetchMessageList = createAction<FetchMessagesType>(
  ChatTypes.FETCH_MESSAGES
);