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
}

export enum UserTypes {
  USER_EXIT = '@user/USER_EXIT'
}