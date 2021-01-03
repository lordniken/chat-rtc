import { Col } from 'components/Grid';
import React from 'react';
import ChatHeader from './components/Header';
import Online from './components/Online';
import Toolbar from './components/Toolbar';
import { StyledCol, StyledRow } from './styles';

const ChatPage: React.FC = () => {
  return (
    <>
      <ChatHeader />
      <StyledRow gap={0}>
        <StyledCol xs={4} gap={0}>
          <Online />
        </StyledCol> 
        <Col xs={20} gap={0}>
          <Toolbar />
          <h1>chat</h1>
        </Col>
      </StyledRow>
    </>
  );
};

export default ChatPage;