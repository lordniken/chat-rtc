import React from 'react';
import Avatar from 'components/Avatar';
import { Col, Row } from 'components/Grid';
import { StyledWrapper, StyledLogo } from './styles';

const ChatHeader: React.FC = () => {
  return (
    <StyledWrapper>
      <Row gap={0} wrap={false}>
        <Col xs={3} align="center">
          <StyledLogo component="h3">
            WebRTC Chat
          </StyledLogo>
        </Col>
        <Col xs={21}>
          <Avatar title="lnk" status="online" />
        </Col>
      </Row>
    </StyledWrapper>
  );
};

export default ChatHeader;