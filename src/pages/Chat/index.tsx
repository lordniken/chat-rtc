import { Col, Row } from 'components/Grid';
import React from 'react';
import ChatHeader from './components/Header';
import MessageControls from './components/MessageControls';
import { Messages } from './components/Messages';
import Online from './components/Online';
import Toolbar from './components/Toolbar';
import { StyledSplitPane } from './styles';

const ChatPage: React.FC = () => {
  return (
    <>
      <ChatHeader />

      <StyledSplitPane split="vertical" minSize={250} maxSize={500} defaultSize={340}>
        <Online />
        <Row gap={0}>
          <Col gap={0}>
            <Toolbar />
          </Col>
          <Col gap={0}>
            <Messages />
          </Col>
          <Col gap={0}>
            <MessageControls />
          </Col>
        </Row>
      </StyledSplitPane>
     
    </>
  );
};

export default ChatPage;