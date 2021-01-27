import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from 'store/user/types';

export interface IChatState {
  onlineList: IUserInfo[]
}

const initialState: IChatState = { 
  onlineList: []
};

const name = '@chat';

const app = createSlice({
  name,
  initialState,
  reducers: {
    SET_ONLINE_LIST(state, action: PayloadAction<IUserInfo[]>) {
      state.onlineList = action.payload;
    }
  },
});

export const { SET_ONLINE_LIST } = app.actions;
export default app.reducer;