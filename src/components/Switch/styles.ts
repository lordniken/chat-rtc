import styled from 'styled-components';

export const StyledFakeSwitch = styled.div`
  display: inline-block;
  position: relative;
  width: 48px;
  height: 28px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid transparent;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    top: 1px;
    left: 1px;
    background-color: ${({ theme }) => theme.colors.inputBorder};
    border-radius: 12px;
    transition: all 0.2s ease-in;
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

export const StyledWrapper = styled.label`
  &:hover {
    ${StyledSwitch}:enabled {
      ~ ${StyledFakeSwitch} {
        border-color: ${({ theme }) => theme.colors.inputBorder}
      }
    }
  }
`;