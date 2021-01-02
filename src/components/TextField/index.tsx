import { useField } from 'formik';
import React from 'react';
import { StyledTextField, StyledWrapper, StyledLabelWrapper } from './styles';

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: 'text' | 'password';
  label?: string;
  icon?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ name, type = 'text', icon, label, ...rest }) => {
  const [field, meta] = useField({ name, type });

  return (
    <StyledWrapper icon={icon}>
      {label && <StyledLabelWrapper>{label}</StyledLabelWrapper>}
      <StyledTextField 
        {...rest}
        {...field}
        type={type}
        data-error={meta.error}
      />
    </StyledWrapper>
  );
};