import React from 'react';
import Avatar from 'components/Avatar';
import { Col, Row } from 'components/Grid';
import Popup from 'reactjs-popup';
import { PopupMenu, PopupItem } from 'components/Popup';
import { Switch } from 'components/Switch';
import Typography from 'components/Typography';
import ExitIcon from './icons/exit.svg';
import RusIcon from './icons/rus.svg';
import EnIcon from './icons/us.svg';
import SunIcon from './icons/sun.svg';
import MoonIcon from './icons/moon.svg';
import { StyledWrapper, StyledLogo, StyledSwitchWrapper, StyledHeaderWrapper } from './styles';

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
            <StyledSwitchWrapper>
              <Typography component="message">Тема</Typography>
              <Switch icons={[SunIcon, MoonIcon]} />
            </StyledSwitchWrapper>
            <StyledSwitchWrapper>
              <Typography component="message">Язык</Typography>
              <Switch icons={[RusIcon, EnIcon]} />
            </StyledSwitchWrapper>            
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