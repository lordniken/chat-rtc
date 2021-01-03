import { Col } from 'components/Grid';
import React from 'react';
import ChatHeader from './components/Header';
import Online from './components/Online';
import { StyledCol, StyledRow } from './styles';

const ChatPage: React.FC = () => {
  return (
    <>
      <ChatHeader />
      <StyledRow gap={0}>
        <StyledCol xs={3} gap={0}>
          <Online />
        </StyledCol> 
        <Col xs={21}>
          <h1>chat</h1>
        </Col>
      </StyledRow>
    </>
  );
};

export default ChatPage;