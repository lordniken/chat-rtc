import styled from 'styled-components';

export const StyledWrapper = styled.label``;

export const StyledFakeSwitch = styled.div`
  display: inline-block;
  position: relative;
  width: 48px;
  height: 28px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    top: 2px;
    left: 2px;
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
    }
  }
`;