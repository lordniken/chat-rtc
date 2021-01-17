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
    background-color: ${({ theme }) => theme.colors.input.background};
    border: 1px solid ${({ theme }) => theme.colors.input.border};
    transition: border-color 0.3s ease-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.input.borderHover};
    }
  }

  .css-1pahdxg-control {
    background-color: ${({ theme }) => theme.colors.input.background};
    border-color: ${({ theme }) => theme.colors.input.border};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.input.hover};
      border-color: ${({ theme }) => theme.colors.input.border};
    }
  }

  .css-26l3qy-menu {
    background-color: ${({ theme }) => theme.colors.input.background};
  }

  .css-1gtu0rj-indicatorContainer {
    color: ${({ theme }) => theme.colors.input.color};
  }

  .css-yt9ioa-option {
    color: ${({ theme }) => theme.colors.input.color};
  }

  // hover
  .css-1n7v3ny-option, .css-1n7v3ny-option:active {
    color: ${({ theme }) => theme.colors.input.color};
    background-color: ${({ theme }) => theme.colors.input.border};
  }

  // active
  .css-9gakcf-option, .css-9gakcf-option:active {
    color: ${({ theme }) => theme.colors.input.color};
    background-color: ${({ theme }) => theme.colors.input.border};
  }

  .css-1uccc91-singleValue {
    color: ${({ theme }) => theme.colors.input.color};
  }

  .css-1pahdxg-control, .css-1pahdxg-control:hover {
    border-color: ${({ theme }) => theme.colors.input.hover};
    box-shadow: none;
  }
`;
