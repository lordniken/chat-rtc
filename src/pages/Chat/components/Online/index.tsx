import React, { useEffect } from 'react';
import Avatar, { AvatarIcons, UserStatus } from 'components/Avatar';
import { Col } from 'components/Grid';
import useSplitter from 'hooks/useSplitter';
import { saveSplitterCollapseState, saveSplitterPosition } from 'utils/selectors';
import { StyledUserWrapper, StyledWrapper, StyledUsername, StyledStatus } from './styles';
import UnreadedMessages from './components/UnreadedMessages';

const MOCK = [
  {
    id: 1,
    nickname: 'Василий',
    avatar: null,
    status: 'online',
    unreaded: 10,
  },
  {
    id: 2,
    nickname: 'Петр',
    avatar: 'm1',
    status: 'away',
    unreaded: 0,
  },
];

const Online: React.FC = () => {
  const { collapsed, separatorPosition } = useSplitter();

  useEffect(() => {
    saveSplitterCollapseState(collapsed);
  }, [collapsed]);

  useEffect(() => {
    saveSplitterPosition(separatorPosition);
  }, [separatorPosition]);

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
            {!collapsed &&
              <StyledUsername>
                <Col>
                  <span>{user.nickname}</span>
                </Col>         
                <Col>
                  <StyledStatus component="small">{user.status}</StyledStatus>
                </Col>
              </StyledUsername>}
            {!!user.unreaded && <UnreadedMessages>{collapsed ? user.unreaded : `${user.unreaded } новых сообщений`}</UnreadedMessages>}
          </StyledUserWrapper>
        ))
      }
    </StyledWrapper>
  );
};

export default Online;