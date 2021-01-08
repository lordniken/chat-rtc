import { useField } from 'formik';
import React from 'react';
import { Option } from 'react-select/src/filters';
import { StyledSelect, StyledWrapper } from './styles';

interface ISelectItem {
  value: string | number,
  label: string | number
}

interface ISelectProps {
  name: string;
  options: ISelectItem[];
  placeholder: string;
}

const Select: React.FC<ISelectProps> = ({
  name,
  options,
  placeholder
}) => {
  const [field, meta, helpers] = useField({ name });

  return (
    <StyledWrapper>
      <StyledSelect
        {...field} 
        options={options}
        name={field.name}
        value={options ? options.find((option) => option.value === field.value) : ''}
        onChange={(option: Option): void => helpers.setValue(option.value)}
        placeholder={placeholder}
        onBlur={field.onBlur}
        components={{
          IndicatorSeparator: () => null
        }}
      />
      {!!meta && meta.error
        ? (<p>{meta.error}</p>)
        : null}
    </StyledWrapper>
  );
};

export default Select;