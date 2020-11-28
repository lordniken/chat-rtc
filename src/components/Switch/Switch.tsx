import { useField } from 'formik';
import React from 'react';
import { StyledWrapper, StyledSwitch, StyledFakeSwitch } from './styles';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement>{
  name: string;
}

export const Switch: React.FC<SwitchProps> = ({ name, ...rest }) => {
  const [field, meta] = useField({ name, type: 'checkbox' });

  return (
    <StyledWrapper>
      <StyledSwitch 
        {...rest} 
        {...field} 
        type="checkbox" 
        data-error={meta.error}
      />
      <StyledFakeSwitch />
    </StyledWrapper>
  );
};