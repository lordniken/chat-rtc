import { useField } from 'formik';
import React from 'react';
import { StyledTextField, StyledWrapper, StyledLabelWrapper, StyledInputWrapper } from './styles';

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: 'text' | 'password';
  label?: string;
  fullWidth?: boolean;
  icon?: string;
}

const TextField: React.FC<ITextFieldProps> = ({ name, type = 'text', icon, fullWidth = false, label, ...rest }) => {
  const [field, meta] = useField({ name, type });

  return (
    <StyledWrapper>
      {label && <StyledLabelWrapper>{label}</StyledLabelWrapper>}
      <StyledInputWrapper fullWidth={fullWidth} icon={icon}>
        <StyledTextField 
          {...rest}
          {...field}
          type={type}
          data-error={meta.error}
        />
      </StyledInputWrapper>
    </StyledWrapper>
  );
};

export default TextField;