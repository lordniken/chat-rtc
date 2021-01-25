import React, { useEffect } from 'react';
import { Avatar, AvatarIcons, UserStatus } from 'components/Avatar';
import { Col } from 'components/Grid';
import useSplitter from 'hooks/useSplitter';
import useBreakpoints from 'hooks/useBreakpoints';
import Typography from 'components/Typography';
import { saveSplitterCollapseState, saveSplitterPosition } from 'utils/selectors';
import { useTranslation } from 'react-i18next';
import { StyledUserWrapper, StyledWrapper, StyledUsername, StyledStatus } from './styles';
import UnreadedMessages from './components/UnreadedMessages';

const MOCK = [
  {
    id: 1,
    nickname: 'Василий',
    avatar: AvatarIcons.default,
    status: UserStatus.online,
    unreaded: 10,
  },
  {
    id: 2,
    nickname: 'Петр',
    avatar: AvatarIcons.m1,
    status: UserStatus.away,
    unreaded: 0,
  },
];

const Online: React.FC = () => {
  const { setCollapsed, collapsed, separatorPosition } = useSplitter();
  const { isMobile, isTablet } = useBreakpoints();
  const translation = useTranslation(['pages/chat']);
   
  useEffect(() => {
    setCollapsed(isMobile || isTablet);
  }, [isMobile, isTablet]);
  
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
              icon={user.avatar} 
              size="small"
              status={user.status} 
            />
            {!collapsed &&
              <StyledUsername>
                <Col>
                  <Typography>{user.nickname}</Typography>
                </Col>         
                <Col>
                  <StyledStatus component="small">{user.status}</StyledStatus>
                </Col>
              </StyledUsername>}
            {!!user.unreaded && <UnreadedMessages>{collapsed ? user.unreaded : `${user.unreaded } ${translation.t('unreadedMessages')}`}</UnreadedMessages>}
          </StyledUserWrapper>
        ))
      }
    </StyledWrapper>
  );
};

export default Online;