export enum ChatTypes {
  CHAT_BROADCAST = '@chat/BROADCAST',
  SEND_MESSAGE = '@chat/SEND_MESSAGE',
  FETCH_MESSAGES = '@chat/FETCH_MESSAGES',
  SEND_IMAGE = '@chat/SEND_IMAGE',
  SEND_VOICE = '@chat/SEND_VOICE'
}

export interface IMessage {
  message: string;
  to: string;
}

export interface IStateMessageList extends IMessage {
  _id: string;
  author: string;
  date: Date;
  type: 'message' | 'image' | 'voice';
}

export interface IStateMessage {
  list: IStateMessageList[];
  totalMessages: number;
}

export type FetchMessagesType = {
  id: string;
  count?: number;
};

export interface IMedia {
  media: Blob;
  to: string;
}