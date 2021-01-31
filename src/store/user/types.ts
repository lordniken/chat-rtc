import { AvatarIcons, UserStatus } from 'components/Avatar';

export interface AuthProps {
  token: string;
  username: string;
  avatar: string;
}

export interface IUserInfo {
  username: string;
  avatar: keyof typeof AvatarIcons;
  status: keyof typeof UserStatus;
  id: string;
}

export enum UserTypes {
  USER_EXIT = '@user/USER_EXIT',
  CHANGE_STATUS = '@user/CHANGE_STATUS',
  STATUS_CHANGED = '@user/STATUS_CHANGED'
}