import React, { useEffect } from 'react';
import { Avatar } from 'components/Avatar';
import { Col } from 'components/Grid';
import useSplitter from 'hooks/useSplitter';
import useBreakpoints from 'hooks/useBreakpoints';
import Typography from 'components/Typography';
import { useSelector } from 'react-redux';
import { getOnlineList } from 'store/chat/selectors';
import { useLocation } from 'react-router-dom';
import { saveSplitterCollapseState, saveSplitterPosition } from 'utils/selectors';
import { useTranslation } from 'react-i18next';
import { StyledUserWrapper, StyledWrapper, StyledUsername, StyledStatus, StyledLink } from './styles';
import UnreadedMessages from './components/UnreadedMessages';

const Online: React.FC = () => {
  const { setCollapsed, collapsed, separatorPosition } = useSplitter();
  const { isMobile, isTablet } = useBreakpoints();
  const translation = useTranslation(['pages/chat']);
  const onlineList = useSelector(getOnlineList);
  const { pathname } = useLocation();
  const selectedChat = pathname.split('/')[2];

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
        onlineList.map((user) => (
          <StyledLink 
            key={user.username} 
            to={`/chat/${user.id}`} 
            selected={selectedChat === user.id}
          >
            <StyledUserWrapper>
              <Avatar 
                title={user.username} 
                icon={user.avatar} 
                size="small"
                status={user.status} 
              />
              {!collapsed &&
                <StyledUsername>
                  <Col>
                    <Typography>{user.username}</Typography>
                  </Col>         
                  <Col>
                    <StyledStatus component="small">{translation.t(`status.${user.status}`).toLowerCase()}</StyledStatus>
                  </Col>
                </StyledUsername>}
              {
                // !!user.unreaded && <UnreadedMessages>{collapsed ? user.unreaded : `${user.unreaded } ${translation.t('unreadedMessages')}`}</UnreadedMessages>
              }
            </StyledUserWrapper>
          </StyledLink>
        ))
      }
    </StyledWrapper>
  );
};

export default Online;