import { useField } from 'formik';
import React from 'react';
import { StyledWrapper, StyledSwitch, StyledFakeSwitch } from './styles';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement>{
  name?: string;
  icons?: string[];
}

export const Switch: React.FC<SwitchProps> = ({ name, icons, ...rest }) => {
  let formikProps = {};

  if (name) {
    [formikProps] = useField({ name, type: 'checkbox' });
  }
  
  return (
    <StyledWrapper icons={icons}>
      <StyledSwitch 
        {...rest}
        {...formikProps}
        type="checkbox" 
      />
      <StyledFakeSwitch />
    </StyledWrapper>
  );

};