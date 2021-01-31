import React from 'react';
import { Col } from 'components/Grid';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOnlineList } from 'store/chat/selectors';
import Toolbar from '../Toolbar';
import MessageControls from '../MessageControls';
import Messages from '../Messages';
import { StyledMessageCol } from './styles';

const ChatContainer: React.FC = () => {
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const onlineList = useSelector(getOnlineList);
  const personOnline = onlineList.find(user => user.id === userId);

  return userId && personOnline ?
    <>
      <Col gap={0}>
        <Toolbar />
      </Col>
      <StyledMessageCol gap={0}>
        <Messages />
      </StyledMessageCol>
      <Col gap={0}>
        <MessageControls />
      </Col>
    </>
    : null;
};

export default ChatContainer;
