import React from 'react';
import { StyledTextField, StyledWrapper } from './styles';

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password';
  icon?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ type = 'text', icon, ...rest }) => {
  return (
    <StyledWrapper icon={icon}>
      <StyledTextField {...rest} type={type} />
    </StyledWrapper>
  );
};