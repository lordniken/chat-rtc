import React, { useEffect } from 'react';
import { Col } from 'components/Grid';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOnlineList } from 'store/chat/selectors';
import { FetchMessageList } from 'store/chat/actions';
import { getIsWsUp } from 'store/app/selectors';
import Toolbar from '../Toolbar';
import MessageControls from '../MessageControls';
import Messages from '../Messages';
import { StyledMessageCol } from './styles';

const ChatContainer: React.FC = () => {
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const onlineList = useSelector(getOnlineList);
  const personOnline = onlineList.find(user => user.id === userId);
  const isWsUp = useSelector(getIsWsUp);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId && isWsUp) {
      dispatch(FetchMessageList({
        id: userId
      }));
    }
  }, [dispatch, userId, isWsUp]);  
  
  if (!(userId && personOnline)) return null;

  return (
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
  );
};

export default ChatContainer;
