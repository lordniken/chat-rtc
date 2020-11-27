import styled from 'styled-components';

interface IStyledTextFieldProps {
  icon?: string;
}

export const StyledTextField = styled.input`
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent;
  outline: 0;
  transition: border-color 0.3s ease-out;

  &:focus, &:hover {
    border-color: ${({ theme }) => theme.colors.inputBorder};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.inputBorder};
  }
`;

export const StyledWrapper = styled.div<IStyledTextFieldProps>`
  display: inline-block;
  position: relative;

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