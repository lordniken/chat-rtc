import { Col, Row } from 'components/Grid';
import React from 'react';
import ChatHeader from './components/Header';
import Online from './components/Online';

const ChatPage: React.FC = () => {
  return (
    <>
      <ChatHeader />
      <Row gap={0} style={{ height: 'calc(100vh - 50px)' }}>
        <Col xs={3} gap={0}>
          <Online />
        </Col> 
        <Col xs={21}>
          <h1>chat</h1>
        </Col>
      </Row>
    </>
  );
};

export default ChatPage;