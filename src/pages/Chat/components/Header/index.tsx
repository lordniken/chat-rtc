import React from 'react';
import { Col, Row } from 'components/Grid';
import { StyledWrapper, StyledLogo } from './styles';
import HeaderControls from './HeaderControls';

const ChatHeader: React.FC = () => {
  return (
    <StyledWrapper>
      <Row gap={0} wrap={false}>
        <Col xs={18} align="center">
          <StyledLogo component="h3">
            WebRTC Chat
          </StyledLogo>
        </Col>
        <Col xs={6}>
          <HeaderControls />
        </Col>
      </Row>
    </StyledWrapper>
  );
};

export default ChatHeader;