import styled from 'styled-components';

interface IStyledTextFieldProps {
  icon?: string;
}

export const StyledTextField = styled.input`
  padding: 9px 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.splitter};
  outline: 0;
  transition: border-color 0.3s ease-out;
  width: 100%;

  &:focus, &:hover {
    border-color: ${({ theme }) => theme.colors.inputBorder};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.inputBorder};
  }

  &::placeholder {
    font-style: italic;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.inputBorder};
  }
`;

export const StyledWrapper = styled.div<IStyledTextFieldProps>`
  display: inline-block;
  position: relative;
  width: 100%;

  ${({ icon }) => icon && `
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: url(${icon}) no-repeat center;
      left: 10px;
      top: calc(50% - 10px);
    }

    ${StyledTextField} {
      padding-left: 35px;
    }
  `}
`;

export const StyledLabelWrapper = styled.span`
  padding-right: 10px;
`;