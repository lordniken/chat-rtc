import React from 'react';
import { StyledWrapper, StyledSwitch, StyledFakeSwitch } from './styles';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export const Switch: React.FC<SwitchProps> = ({ ...rest }) => {
  return (
    <StyledWrapper>
      <StyledSwitch {...rest} type="checkbox" />
      <StyledFakeSwitch />
    </StyledWrapper>
  );
};