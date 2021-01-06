import React from 'react';
import Avatar from 'components/Avatar';
import { Col, Row } from 'components/Grid';
import Popup from 'reactjs-popup';
import { PopupMenu, PopupItem } from 'components/Popup';
import { Switch } from 'components/Switch';
import ExitIcon from './icons/exit.svg';
import RusIcon from './icons/rus.svg';
import EnIcon from './icons/us.svg';
import SunIcon from './icons/sun.svg';
import MoonIcon from './icons/moon.svg';
import { StyledWrapper, StyledLogo } from './styles';

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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Switch 
              icons={[SunIcon, MoonIcon]}
            />
            <Switch 
              icons={[RusIcon, EnIcon]}
            />
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
                
                <PopupItem onClick={() => console.log('leave')} icon={ExitIcon}>Выйти</PopupItem>
              </PopupMenu>
            </Popup>
          </div>
        </Col>
      </Row>
    </StyledWrapper>
  );
};

export default ChatHeader;