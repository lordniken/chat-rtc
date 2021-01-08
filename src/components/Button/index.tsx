import React from 'react';
import Spinner from 'components/Spinner';
import { StyledButton, StyledButtonWithoutText } from './styles';

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
  if (icon && !children) {
    return (
      <StyledButtonWithoutText fullWidth={fullWidth} transparent={transparent} icon={icon} {...rest} />
    );
  }

  return (
    <StyledButton fullWidth={fullWidth} isLoading={isLoading} icon={icon} {...rest}>
      {isLoading ? <span><Spinner size={2} />{children}</span> : <span>{children}</span>}
    </StyledButton>
  );
};