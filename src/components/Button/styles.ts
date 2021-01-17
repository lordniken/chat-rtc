import styled, { css } from 'styled-components';

interface IProps {
  fullWidth: boolean;
  transparent?: boolean;
  isLoading?: boolean;
  icon?: string;
}

export const StyledButton = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ isLoading }) => isLoading ? '8px 34px' : '8px 48px'} !important;
  background: ${({ theme, transparent }) => transparent ? 'transparent' : theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.color};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  text-transform: uppercase;
  padding: 0;
  outline: 0;
  min-height: 34px;
  max-height: 34px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease-out;
  ${({ fullWidth = false }) => fullWidth && css`width: 100%;`}

  ${({ isLoading }) => isLoading && css`
    & div {
      margin-right: 8px;
    }
  `}

  &:hover {
    background: ${({ theme, transparent }) => transparent ? theme.colors.splitter : theme.colors.button.hover};
  }

  &:active {
    background: ${({ theme, transparent }) => transparent ? 'transparent' : theme.colors.button.background};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.button.disabled};
    cursor: default;
  }

  span {
    display: flex;
    align-items: center;
  }

  ${({ icon, isLoading }) => icon && !isLoading && css`
    &:before {
      content: '';
      background: url(${icon}) center no-repeat;
      background-size: contain;
      width: 20px;
      height: 20px;
    }

    span {
      padding: 0 8px;
    }
  `}
`;

export const StyledButtonWithoutText = styled(StyledButton)`
  border-radius: 50%;
  position: relative;
  width: 38px;
  height: 38px;
  max-width: 38px;
  max-height: 38px;
  padding: 0 !important;

  &:before {
    content: '';
    position: absolute;
    background: url(${({ icon }) => icon}) center no-repeat;
    background-size: contain;
    width: 24px;
    height: 24px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;