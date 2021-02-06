import { createAction } from '@reduxjs/toolkit';
import { ChatTypes, FetchMessagesType, IMedia, IMessage } from './types';

export const ChatBroadcast = createAction(
  ChatTypes.CHAT_BROADCAST
);

export const SendMessage = createAction<IMessage>(
  ChatTypes.SEND_MESSAGE
);

export const FetchMessageList = createAction<FetchMessagesType>(
  ChatTypes.FETCH_MESSAGES
);

export const SendImage = createAction<IMedia>(
  ChatTypes.SEND_IMAGE
);

export const SendVoice = createAction<IMedia>(
  ChatTypes.SEND_VOICE
);
