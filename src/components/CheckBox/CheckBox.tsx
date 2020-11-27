import React from 'react';
import { StyledCheckBoxWrapper, StyledFakeCheckBox, StyledCheckBox, StyledCheckBoxText } from './styles';

interface ICheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: string;
}

export const CheckBox: React.FC<ICheckBoxProps> = ({ children, ...rest }) => {
  return (
    <StyledCheckBoxWrapper>
      <StyledCheckBox {...rest} type="checkbox" />
      <StyledFakeCheckBox />
      <StyledCheckBoxText>{children}</StyledCheckBoxText>
    </StyledCheckBoxWrapper>
  );
};