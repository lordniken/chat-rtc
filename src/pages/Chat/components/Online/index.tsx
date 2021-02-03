import React, { useEffect, useMemo } from 'react';
import { Avatar } from 'components/Avatar';
import { Col } from 'components/Grid';
import useSplitter from 'hooks/useSplitter';
import useBreakpoints from 'hooks/useBreakpoints';
import Typography from 'components/Typography';
import { useSelector } from 'react-redux';
import { getMessageList, getOnlineList } from 'store/chat/selectors';
import { useLocation } from 'react-router-dom';
import { saveSplitterCollapseState, saveSplitterPosition } from 'utils/selectors';
import { getUserInfo } from 'store/user/selectors';
import { useTranslation } from 'react-i18next';
import { IUserInfo } from 'store/user/types';
import { StyledUserWrapper, StyledWrapper, StyledUsername, StyledStatus, StyledLink } from './styles';
import UnreadedMessages from './components/UnreadedMessages';

interface IUserLinkProps {
  userOnline: IUserInfo;
}

const UserLink: React.FC<IUserLinkProps> = ({ children, userOnline }) => {
  const { pathname } = useLocation();
  const selectedChat = pathname.split('/')[2];
  const { username } = useSelector(getUserInfo);

  return userOnline.username  !== username ? (
    <StyledLink 
      to={`/chat/${userOnline.id}`} 
      selected={selectedChat === userOnline.id}
    >
      {children}
    </StyledLink>
  ) : (<>{children}</>);
};

const Online: React.FC = () => {
  const { setCollapsed, collapsed, separatorPosition } = useSplitter();
  const { isMobile, isTablet } = useBreakpoints();
  const translation = useTranslation(['pages/chat']);
  const onlineList = useSelector(getOnlineList);
  const messageList = useSelector(getMessageList);
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const unreadedMessages = useMemo(
    () => messageList.filter(message => message.author !== userId && message.to !== userId), [messageList]);

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
        onlineList.map(user => {
          const unreadedCount = unreadedMessages.filter(u => u.author === user.id).length;
          
          return (
            <UserLink key={user.username} userOnline={user}>
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
                  !!unreadedCount && (
                    <UnreadedMessages>
                      {collapsed ? unreadedCount : `${unreadedCount} ${translation.t('unreadedMessages')}`}
                    </UnreadedMessages>
                  )
                }
              </StyledUserWrapper>
            </UserLink>
          );
        })
      }
    </StyledWrapper>
  );
};

export default Online;