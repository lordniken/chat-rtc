import React, { useEffect } from 'react';
import { Col, Row } from 'components/Grid';
import Splitter from 'components/Splitter';
import { getSplitterCollapseState, getSplitterPosition } from 'utils/selectors';
import { useDispatch } from 'react-redux';
import { WsConnect } from 'store/app/actions';
import ChatHeader from './components/Header';
import MessageControls from './components/MessageControls';
import Messages from './components/Messages';
import Online from './components/Online';
import Toolbar from './components/Toolbar';
import { StyledSplitPane, StyledMessageCol } from './styles';

const ChatPage: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(WsConnect());
  }, []);

  return (
    <>
      <ChatHeader />
      <Splitter 
        min={300} 
        max={800} 
        defaultWidth={getSplitterPosition() || 300} 
        isCollapsed={getSplitterCollapseState()}
      >
        <StyledSplitPane>
          <Online />
        </StyledSplitPane>
        <Row gap={0} wrap>
          <Col gap={0}>
            <Toolbar />
          </Col>
          <StyledMessageCol gap={0}>
            <Messages />
          </StyledMessageCol>
          <Col gap={0}>
            <MessageControls />
          </Col>
        </Row>
      </Splitter>     
    </>
  );
};

export default ChatPage;