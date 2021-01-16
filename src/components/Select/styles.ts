import styled from 'styled-components';
import Select from 'react-select';

export const StyledWrapper = styled.div`
  display: inline-block;
  outline: 0;
`;

interface IProps {
  width: number;
}

export const StyledSelect = styled(Select)<IProps>`
  width: ${({ width }) => width}px;
  
  .css-yk16xz-control {
    border-color: transparent;
    transition: border-color 0.3s ease-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.inputBorder};
    }
  }

  .css-1pahdxg-control, .css-1pahdxg-control:hover {
    border-color: ${({ theme }) => theme.colors.inputBorder};
    box-shadow: none;
  }
`;
