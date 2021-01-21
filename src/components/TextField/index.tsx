import React, { useMemo, useState } from 'react';
import { useField } from 'formik';
import { StyledTextField, StyledWrapper, StyledLabelWrapper, StyledInputWrapper, PasswordIcon } from './styles';

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: 'text' | 'password';
  label?: string;
  fullWidth?: boolean;
  icon?: string;
}

const TextField: React.FC<ITextFieldProps> = ({ name, type = 'text', icon, fullWidth = false, label, ...rest }) => {
  const [field, meta] = useField({ name, type });
  const [isPwdShown, setPwdShown] = useState(false);

  const inputType = useMemo(() => {
    if (type === 'password') return isPwdShown ? 'text' : 'password';
    
    return type;
  }, [isPwdShown]);

  return (
    <StyledWrapper>
      {label && <StyledLabelWrapper>{label}</StyledLabelWrapper>}
      <StyledInputWrapper fullWidth={fullWidth} icon={icon}>
        <StyledTextField 
          {...rest}
          {...field}
          type={inputType}
          htmlType={type}
          data-error={meta.error}
        />
        {type === 'password' && 
          <PasswordIcon 
            isPwnShown={isPwdShown} 
            onClick={() => setPwdShown(prev => !prev)} 
          />}
      </StyledInputWrapper>
    </StyledWrapper>
  );
};

export default TextField;