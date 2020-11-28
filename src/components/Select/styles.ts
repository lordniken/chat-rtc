import styled from 'styled-components';
import Select from 'react-select';

export const StyledWrapper = styled.div`
  display: inline-block;
  outline: 0;
`;

export const StyledSelect = styled(Select)`
  width: 240px;
  
  .css-yk16xz-control {
    border-color: transparent;
    transition: border-color 0.3s ease-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.inputBorder};
    }
  }
`;
