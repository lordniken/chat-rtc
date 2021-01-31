import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import { IUserInfo } from 'store/user/types';
import { IChatState } from '.';
import { IStateMessage } from './types';

const getChatState = (state: ApplicationState) => state.chat;

export const getOnlineList = createSelector<ApplicationState, IChatState, IUserInfo[]>(
  getChatState,
  (app) => app.onlineList,
);

export const getMessageList = createSelector<ApplicationState, IChatState, IStateMessage[]>(
  getChatState,
  (app) => app.messages,
);
