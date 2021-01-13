import { PopupItem, PopupMenu } from 'components/Popup';
import React from 'react';
import Popup from 'reactjs-popup';
import { StyledAvatar, StyledHeaderWrapper } from './styles';
import ExitIcon from './icons/exit.svg';
import Switches from './Switches';

const HeaderControls: React.FC = () => {
  return (
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
  );
};

export default HeaderControls;
