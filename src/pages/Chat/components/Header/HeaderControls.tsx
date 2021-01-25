import React from 'react';
import Popup from 'reactjs-popup';
import { PopupItem, PopupMenu } from 'components/Popup';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from 'store/user/selectors';
import { UserStatus } from 'components/Avatar';
import { UserExit } from 'store/user/actions';
import { StyledAvatar, StyledHeaderWrapper } from './styles';
import ExitIcon from './icons/exit.svg';
import Switches from './Switches';

const HeaderControls: React.FC = () => {
  const translation = useTranslation(['pages/chat']);
  const userInfo = useSelector(getUserInfo);
  const statusList = [...Object.values(UserStatus)];
  const dispatch = useDispatch();

  const exitHandler = () => {
    dispatch(UserExit());
  };

  return (
    <StyledHeaderWrapper>
      <Switches />          
      <Popup 
        trigger={<StyledAvatar title={userInfo.username} icon={userInfo.avatar} status={userInfo.status} />}
        closeOnDocumentClick
        mouseEnterDelay={0}
        mouseLeaveDelay={300}
      >
        <PopupMenu>
          <Popup 
            trigger={<PopupItem>{translation.t('changeStatus')}</PopupItem>}
            closeOnDocumentClick
            mouseEnterDelay={0}
            mouseLeaveDelay={300}
            on="hover"
            position="left top"
            arrow={false}
          >
            <PopupMenu>
              {
                statusList.map(status => (
                  <PopupItem key={status} disabled={status === userInfo.status}>
                    {translation.t(`status.${status}`)}
                  </PopupItem>
                ))
              }
            </PopupMenu>
          </Popup>
          <PopupItem 
            icon={ExitIcon} 
            onClick={exitHandler}
          >
            {translation.t('exit')}
          </PopupItem>
        </PopupMenu>
      </Popup>
    </StyledHeaderWrapper>
  );
};

export default HeaderControls;
