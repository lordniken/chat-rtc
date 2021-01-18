import React from 'react';
import { Button } from 'components/Button';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import CallIcon from './icons/call.svg';
import DeleteIcon from './icons/delete.svg';
import { StyledStatus, StyledUsername } from '../Online/styles';
import { StyledWrapper, StyledUserBlock, StyledUserFuncs, StyledAvatar } from './styles';

const Toolbar: React.FC = () => {
  const translation = useTranslation(['pages/chat']);

  return (
    <StyledWrapper>
      <StyledUserBlock>
        <StyledAvatar 
          title="Василий" 
        />
        <StyledUsername>
          <Typography>Василий</Typography>
          <StyledStatus component="small">в сети</StyledStatus>
        </StyledUsername>
      </StyledUserBlock>
      <StyledUserFuncs>
        <Button icon={CallIcon} transparent title={translation.t('call')} />
        <Button icon={DeleteIcon} transparent title={translation.t('clearHistory')} />
      </StyledUserFuncs>
    </StyledWrapper>
  );
};


export default Toolbar;