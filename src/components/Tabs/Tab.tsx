import React from 'react';
import { useField } from 'formik';
import Typography from 'components/Typography';
import { StyledTab, StyledTabInput } from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

const Tab: React.FC<IProps> = ({ children, name = 'tab', label, value, ...rest }) => {
  const [field, meta] = useField({ name });

  return (
    <StyledTab>
      <Typography component="h5" align="center">{label}</Typography>
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
