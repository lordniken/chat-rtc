import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import { IUserInfo } from 'store/user/types';
import { IChatState } from '.';


const getChatState = (state: ApplicationState) => state.chat;

export const getOnlineList = createSelector<ApplicationState, IChatState, IUserInfo[]>(
  getChatState,
  (app) => app.onlineList,
);
