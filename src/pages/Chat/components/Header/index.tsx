import React from 'react';
import { Col, Row } from 'components/Grid';
import Popup from 'reactjs-popup';
import { PopupMenu, PopupItem } from 'components/Popup';

import Switches from './Switches';
import { StyledWrapper, StyledLogo, StyledHeaderWrapper, StyledAvatar } from './styles';
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