import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthProps } from './types';

export interface IUserState {
  isAuth: boolean | null;
  username: string | null;
  avatar: string | null;
}

const initialState: IUserState = { 
  isAuth: null,
  username: null,
  avatar: null
};

const name = '@user';

const user = createSlice({
  name,
  initialState,
  reducers: {
    setUserIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUserInfo(state, action: PayloadAction<AuthProps>) {
      state.username = action.payload.username;
      state.avatar = action.payload.avatar;
    },
  },
});

export const { setUserIsAuth, setUserInfo } = user.actions;
export default user.reducer;