import React from 'react';
import { Button } from 'components/Button';
import Typography from 'components/Typography';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getOnlineList } from 'store/chat/selectors';
import CallIcon from './icons/call.svg';
import DeleteIcon from './icons/delete.svg';
import { StyledStatus, StyledUsername } from '../Online/styles';
import { StyledWrapper, StyledUserBlock, StyledUserFuncs, StyledAvatar } from './styles';


const Toolbar: React.FC = () => {
  const translation = useTranslation(['pages/chat']);
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const onlineList = useSelector(getOnlineList);
  const person = onlineList.find(user => user.id === userId);

  return (
    <StyledWrapper>
      {person ? (
        <>
          <StyledUserBlock>
            <StyledAvatar
              title={person.username}
              icon={person.avatar} 
            />
            <StyledUsername>
              <Typography>{person.username}</Typography>
              <StyledStatus component="small">{translation.t(`status.${person.status}`).toLowerCase()}</StyledStatus>
            </StyledUsername>
          </StyledUserBlock>
          <StyledUserFuncs>
            <Button icon={CallIcon} transparent title={translation.t('call')} />
            <Button icon={DeleteIcon} transparent title={translation.t('clearHistory')} />
          </StyledUserFuncs>
        </>) : null}
    </StyledWrapper>);
};


export default Toolbar;