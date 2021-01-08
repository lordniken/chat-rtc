import styled, { css } from 'styled-components';

export const StyledFakeSwitch = styled.div`
  display: inline-block;
  position: relative;
  width: 42px;
  height: 22px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.splitter};
  transition: border-color 0.3s ease-out;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: 1px;
    left: 1px;
    background-color: ${({ theme }) => theme.colors.inputBorder};
    border-radius: 10px;
    transition: all 0.2s ease-in;
    z-index: 999;
  }
`;

export const StyledSwitch = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked {
    ~ ${StyledFakeSwitch} {
      &:before {
        transform: translateX(20px);
        background-color: ${({ theme }) => theme.colors.accentPurple};
      }
    }
  }

  &:disabled {
    ~ ${StyledFakeSwitch} {
      cursor: default;
      background-color: ${({ theme }) => theme.colors.inputBorder};
    }
  }
`;

interface IProps {
  icons?: string[];
}

export const StyledWrapper = styled.label<IProps>`
  position: relative;
  display: inline-block;

  ${({ icons }) => icons && css`
    &:before, &:after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 3px;
      z-index: 100;
      cursor: pointer;
    }

    &:before {
      background: url(${icons[0]});
      right: 3px;
    }

    &:after {
      background: url(${icons[1]});
      left: 3px;
    }  
  `};

  &:hover {
    ${StyledSwitch}:enabled {
      ~ ${StyledFakeSwitch} {
        border-color: ${({ theme }) => theme.colors.inputBorder}
      }
    }
  }
`;