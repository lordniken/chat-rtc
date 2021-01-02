import Spinner from 'components/Spinner';
import React from 'react';
import { StyledButton, StyledButtonWithIcon, StyledButtonWithoutText } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: string;
}

export const Button: React.FC<IButtonProps> = ({ children, isLoading = false, fullWidth = false, icon, ...rest } ) => {
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
      {isLoading ? <Spinner size={2} /> : <span>{children}</span>}
    </StyledButton>
  );
};