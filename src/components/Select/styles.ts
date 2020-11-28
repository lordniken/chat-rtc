import styled from 'styled-components';
import Select from 'react-select';

export const StyledWrapper = styled.div`
  display: inline-block;
  outline: 0;
`;

export const StyledSelect = styled(Select)`
  width: 240px;
`;

/*

export const StyledSelect = styled.div`
  display: inline-block;
  position: relative;
  padding: 14px 30px 14px 16px;
  min-width: 240px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  transition: border-color 0.3s ease-out;
  user-select: none;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    background: url(${dropdownIcon}) no-repeat center;
    width: 10px;
    height: 7px;
    right: 10px;
    top: calc(50% - 3.5px);
  }
`;

*/