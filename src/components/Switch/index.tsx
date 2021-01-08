import { useField } from 'formik';
import React from 'react';
import { StyledWrapper, StyledSwitch, StyledFakeSwitch } from './styles';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement>{
  name: string;
  icons?: string[];
}

const Switch: React.FC<SwitchProps> = ({ name, icons, ...rest }) => {
  const [field, meta] = useField({ name, type: 'checkbox' });
  
  return (
    <StyledWrapper icons={icons}>
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

export default Switch;