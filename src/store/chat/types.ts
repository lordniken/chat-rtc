export enum ChatTypes {
  CHAT_BROADCAST = '@chat/BROADCAST',
  SEND_MESSAGE = '@chat/SEND_MESSAGE',
  FETCH_MESSAGES = '@chat/FETCH_MESSAGES'
}

export interface IMessage {
  message: string;
  to: string;
}

export interface IStateMessage extends IMessage {
  _id: string;
  author: string;
  date: Date;
}