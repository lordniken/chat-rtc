import React from 'react';
import { useField } from 'formik';
import { StyledTab, StyledTabInput } from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Tab: React.FC<IProps> = ({ children, name = 'tab', label, value, ...rest }) => {
  const [field, meta] = useField({ name });

  return (
    <StyledTab>
      {label}
      <StyledTabInput
        {...field}   
        {...meta}
        {...rest}
        type="radio"
        value={value}
        checked={value === meta.value}
      />
    </StyledTab>
  );
};

export default React.memo(Tab);
