import React from 'react';
import Avatar from 'components/Avatar';
import { Button } from 'components/Button';
import { Col } from 'components/Grid';
import Typography from 'components/Typography';
import CallIcon from './icons/call.svg';
import DeleteIcon from './icons/delete.svg';
import { StyledStatus, StyledUsername } from '../Online/styles';
import { StyledWrapper, StyledUserBlock, StyledUserFuncs } from './styles';

const Toolbar: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledUserBlock>
        <Avatar 
          title="Василий" 
        />
        <Typography>
          <StyledUsername>
            <Col>
              <span>Василий</span>
            </Col>         
            <Col>
              <StyledStatus component="small" dark>в сети</StyledStatus>
            </Col>
          </StyledUsername>
        </Typography>
      </StyledUserBlock>
      <StyledUserFuncs>
        <Button icon={CallIcon} transparent title="Вызов" />
        <Button icon={DeleteIcon} transparent title="Очистить историю" />
      </StyledUserFuncs>
    </StyledWrapper>
  );
};


export default Toolbar;