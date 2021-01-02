import React from 'react';
import { StyledButton, StyledButtonWithIcon, StyledButtonWithoutText } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: string;
  fullWidth?: boolean;
  icon?: string;
}

export const Button: React.FC<IButtonProps> = ({ children, fullWidth = false, icon, ...rest } ) => {
  if (icon && children){
    return (
      <StyledButtonWithIcon fullWidth={fullWidth} {...rest}>
        <span>
          <img src={icon} alt="" />
          {children}
        </span>
      </StyledButtonWithIcon>
    );
  }

  if (icon) {
    return (
      <StyledButtonWithoutText fullWidth={fullWidth} {...rest}>
        <span>
          <img src={icon} alt="" />
        </span>
      </StyledButtonWithoutText>
    );
  }

  return (
    <StyledButton fullWidth={fullWidth} {...rest}>
      <span>
        {children}
      </span>
    </StyledButton>
  );
};