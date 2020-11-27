import { useField } from 'formik';
import React from 'react';
import { StyledTextField, StyledWrapper } from './styles';

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: 'text' | 'password';
  icon?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ name, type = 'text', icon, ...rest }) => {
  const [field, meta] = useField({ name, type });

  return (
    <StyledWrapper icon={icon}>
      <StyledTextField 
        {...rest}
        {...field}
        type={type}
        data-error={meta.error}
      />
    </StyledWrapper>
  );
};