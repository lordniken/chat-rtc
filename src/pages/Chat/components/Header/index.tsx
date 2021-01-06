import React from 'react';
import { Col, Row } from 'components/Grid';
import Popup from 'reactjs-popup';
import { PopupMenu, PopupItem } from 'components/Popup';
import ExitIcon from './icons/exit.svg';
import Switches from './Switches';
import { StyledWrapper, StyledLogo, StyledHeaderWrapper, StyledAvatar } from './styles';

const ChatHeader: React.FC = () => {
  return (
    <StyledWrapper>
      <Row gap={0} wrap={false}>
        <Col xs={4} align="center">
          <StyledLogo component="h3">
            WebRTC Chat
          </StyledLogo>
        </Col>
        <Col xs={20}>
          <StyledHeaderWrapper>
            <Switches />          
            <Popup 
              trigger={<StyledAvatar title="lnk" status="online" />}
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
                  position="left top"
                  arrow={false}
                >
                  <PopupMenu>
                    <PopupItem>В сети</PopupItem>
                    <PopupItem>Отошел</PopupItem>
                    <PopupItem>Недоступен</PopupItem>
                  </PopupMenu>
                </Popup>
                <PopupItem onClick={() => console.log('leave')} icon={ExitIcon}>Выйти</PopupItem>
              </PopupMenu>
            </Popup>
          </StyledHeaderWrapper>
        </Col>
      </Row>
    </StyledWrapper>
  );
};

export default ChatHeader;