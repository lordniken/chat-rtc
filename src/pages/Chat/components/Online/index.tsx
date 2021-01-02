import React from 'react';
import Avatar, { AvatarIcons, UserStatus } from 'components/Avatar';
import { StyledUserWrapper, StyledWrapper } from './styles';

const MOCK = [
  {
    id: 1,
    nickname: 'Василий',
    avatar: null,
    status: 'online',
  },
  {
    id: 2,
    nickname: 'Петр',
    avatar: 'm1',
    status: 'away',
  }  
];

const Online: React.FC = () => {
  return (
    <StyledWrapper>
      {
        MOCK.map((user) => (
          <StyledUserWrapper key={user.id}>
            <Avatar 
              title={user.nickname} 
              icon={user.avatar ? user.avatar as keyof typeof AvatarIcons : null} 
              size="small"
              status={user.status as keyof typeof UserStatus} 
            />
            <span>{user.nickname}</span>
          </StyledUserWrapper>
        ))
      }
    </StyledWrapper>
  );
};

export default Online;