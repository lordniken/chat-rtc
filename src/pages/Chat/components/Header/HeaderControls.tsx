import { PopupItem, PopupMenu } from 'components/Popup';
import React from 'react';
import Popup from 'reactjs-popup';
import { useTranslation } from 'react-i18next';
import { StyledAvatar, StyledHeaderWrapper } from './styles';
import ExitIcon from './icons/exit.svg';
import Switches from './Switches';

const HeaderControls: React.FC = () => {
  const translation = useTranslation(['pages/chat']);

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
            trigger={<PopupItem>{translation.t('changeStatus')}</PopupItem>}
            closeOnDocumentClick
            mouseLeaveDelay={300}
            on="hover"
            mouseEnterDelay={0}
            position="left top"
            arrow={false}
          >
            <PopupMenu>
              <PopupItem>{translation.t('status.online')}</PopupItem>
              <PopupItem>{translation.t('status.away')}</PopupItem>
              <PopupItem>{translation.t('status.busy')}</PopupItem>
            </PopupMenu>
          </Popup>
          <PopupItem icon={ExitIcon}>{translation.t('exit')}</PopupItem>
        </PopupMenu>
      </Popup>
    </StyledHeaderWrapper>
  );
};

export default HeaderControls;
