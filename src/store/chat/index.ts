import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from 'store/user/types';
import { IStateMessage } from './types';

export interface IChatState {
  onlineList: IUserInfo[],
  messages: IStateMessage[];
}

const initialState: IChatState = { 
  onlineList: [],
  messages: []
};

const name = '@chat';

const chat = createSlice({
  name,
  initialState,
  reducers: {
    SET_ONLINE_LIST(state, action: PayloadAction<IUserInfo[]>) {
      state.onlineList = action.payload;
    },
    NEW_MESSAGE(state, action: PayloadAction<IStateMessage>) {
      state.messages.push(action.payload);
    },
    SET_MESSAGES(state, action: PayloadAction<IStateMessage[]>) {
      state.messages = action.payload;
    },    
  },
});

export const { SET_ONLINE_LIST } = chat.actions;
export default chat.reducer;