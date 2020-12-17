import React from 'react';
import { StyledButton, StyledButtonWithIcon, StyledButtonWithoutText } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: string;
  icon?: string;
}

export const Button: React.FC<IButtonProps> = ({ children, icon, ...rest } ) => {
  if (icon && children){
    return (
      <StyledButtonWithIcon {...rest}>
        <span>
          <img src={icon} alt="" />
          {children}
        </span>
      </StyledButtonWithIcon>
    );
  }

  if (icon) {
    return (
      <StyledButtonWithoutText {...rest}>
        <span>
          <img src={icon} alt="" />
        </span>
      </StyledButtonWithoutText>
    );
  }

  return (
    <StyledButton {...rest}>
      <span>
        {children}
      </span>
    </StyledButton>
  );
};