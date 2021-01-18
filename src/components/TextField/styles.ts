import styled from 'styled-components';

export const StyledTextField = styled.input`
  padding: 9px 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  outline: 0;
  transition: border-color 0.3s ease-out;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.input.color};
  font-size: 16px;
  
  &:focus, &:hover {
    border-color: ${({ theme }) => theme.colors.input.borderHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.input.border};
  }

  &::placeholder {
    font-style: italic;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.input.border};
  }
`;

export const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

export const StyledLabelWrapper = styled.span`
  padding-right: 10px;
  color: ${({ theme }) => theme.colors.textColor};
`;

interface IIconWrapper {
  icon?: string;
  fullWidth?: boolean;
}

export const StyledInputWrapper = styled.div<IIconWrapper>`
  position: relative;
  display: ${({ fullWidth }) => fullWidth ? 'block' : 'inline-block'};

  ${({ icon }) => icon && `
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: url(${icon}) no-repeat center;
      background-size: contain;
      left: 10px;
      top: calc(50% - 10px);
    }

    ${StyledTextField} {
      padding-left: 35px;
    }
  `}
`;