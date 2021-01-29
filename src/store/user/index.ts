import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvatarIcons, UserStatus } from 'components/Avatar';
import { IUserInfo } from './types';

export interface IUserState {
  isAuth: boolean | null;
  username: string | null;
  avatar: keyof typeof AvatarIcons;
  status: keyof typeof UserStatus;
}

const initialState: IUserState = { 
  isAuth: null,
  username: null,
  avatar: AvatarIcons.default,
  status: UserStatus.online
};

const name = '@user';

const user = createSlice({
  name,
  initialState,
  reducers: {
    setUserIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUserInfo(state, action: PayloadAction<IUserInfo>) {
      state.username = action.payload.username;
      state.avatar = action.payload.avatar;
      state.status = action.payload.status;
    },
    STATUS_CHANGED(state, action: PayloadAction<UserStatus>) {
      state.status = action.payload;
    },
  },
});

export const { setUserIsAuth, setUserInfo, STATUS_CHANGED } = user.actions;
export default user.reducer;