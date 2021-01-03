import React from 'react';
import Avatar from 'components/Avatar';
import { Col, Row } from 'components/Grid';
import Popup from 'reactjs-popup';
import { PopupMenu, PopupItem } from 'components/Popup';
import svg from 'assets/icons/exit.svg';
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
          <Popup 
            trigger={<Avatar title="lnk" status="online" />}
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
          >
            <PopupMenu>
              <Popup 
                trigger={<PopupItem>Статус</PopupItem>}
                closeOnDocumentClick
                mouseLeaveDelay={300}
                on="hover"
                mouseEnterDelay={0}
                position="right top"
                arrow={false}
              >
                <PopupMenu>
                  <PopupItem>В сети</PopupItem>
                  <PopupItem>Отошел</PopupItem>
                  <PopupItem>Недоступен</PopupItem>
                </PopupMenu>
              </Popup>
              
              <PopupItem onClick={() => console.log('leave')} icon={svg}>Выйти</PopupItem>
            </PopupMenu>
          </Popup>
          
        </Col>
      </Row>
    </StyledWrapper>
  );
};

export default ChatHeader;