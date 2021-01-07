import React from 'react';
import Spinner from 'components/Spinner';
import { StyledButton, StyledButtonWithIcon, StyledButtonWithoutText } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  fullWidth?: boolean;
  isLoading?: boolean;
  transparent?: boolean;
  icon?: string;
}

export const Button: React.FC<IButtonProps> = ({ 
  children, 
  transparent = false, 
  isLoading = false, 
  fullWidth = false, 
  icon, 
  ...rest 
} ) => {
  if (icon && children){
    return (
      <StyledButtonWithIcon fullWidth={fullWidth} {...rest}>
        <span>
          <img src={icon} width="24" height="24" alt="" />
          {children}
        </span>
      </StyledButtonWithIcon>
    );
  }

  if (icon) {
    return (
      <StyledButtonWithoutText fullWidth={fullWidth} transparent={transparent} {...rest}>
        <span>
          <img src={icon} width="24" height="24" alt="" />
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