import { createAction } from '@reduxjs/toolkit';
import { ChatTypes } from './types';

export const ChatBroadcast = createAction(
  ChatTypes.CHAT_BROADCAST
);