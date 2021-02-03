import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from 'store/user/types';
import { IStateMessage, IStateMessageList } from './types';

export interface IChatState {
  onlineList: IUserInfo[],
  messages: IStateMessage;
}

const initialState: IChatState = { 
  onlineList: [],
  messages: {
    list: [],
    totalMessages: 0
  }
};

const name = '@chat';

const chat = createSlice({
  name,
  initialState,
  reducers: {
    SET_ONLINE_LIST(state, action: PayloadAction<IUserInfo[]>) {
      state.onlineList = action.payload;
    },
    NEW_MESSAGE(state, action: PayloadAction<IStateMessageList>) {
      state.messages.list.push(action.payload);
    },
    SET_MESSAGES(state, action: PayloadAction<string>) {
      const payload: IStateMessage = JSON.parse(action.payload);
      state.messages.list = payload.list;
      state.messages.totalMessages = payload.totalMessages;
    },    
  },
});

export const { SET_ONLINE_LIST } = chat.actions;
export default chat.reducer;