import { useField } from 'formik';
import React, { ReactElement } from 'react';
import { StyledCheckBoxWrapper, StyledFakeCheckBox, StyledCheckBox, StyledCheckBoxText } from './styles';

interface ICheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children?: string | ReactElement;
}

export const CheckBox: React.FC<ICheckBoxProps> = ({ name, children, ...rest }) => {
  const [field, meta] = useField({ name, type: 'checkbox' });

  return (
    <StyledCheckBoxWrapper>
      <StyledCheckBox 
        {...rest}
        {...field}
        type="checkbox"
        data-error={meta.error}
      />
      <StyledFakeCheckBox />
      <StyledCheckBoxText>{children}</StyledCheckBoxText>
    </StyledCheckBoxWrapper>
  );
};