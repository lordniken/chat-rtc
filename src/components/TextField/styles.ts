import styled from 'styled-components';
import ShowPwdIcon from './icons/showPwd.svg';
import HidePwdIcon from './icons/hidePwd.svg';

interface IPasswordIconProps {
  isPwnShown: boolean;
}

export const PasswordIcon = styled.button<IPasswordIconProps>`
  position: absolute;
  border: none;
  outline: none;
  right: 10px;
  top: 5px;
  width: 24px;
  height: 24px;
  background-image: url(${({ isPwnShown }) => isPwnShown ? HidePwdIcon : ShowPwdIcon});
  background-color: ${({ theme }) => theme.colors.input.background};
  background-size: contain;
  cursor: pointer;
`;

interface ITextFieldProps {
  htmlType: string;
}

export const StyledTextField = styled.input<ITextFieldProps>`
  outline: 0;
  transition: border-color 0.3s ease-out;
  position: relative;
  width: ${({ htmlType }) => htmlType === 'password' ? 'calc(100% - 30px)' : '100%'};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.input.color};
  font-size: 16px;
  padding: 9px 10px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  
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

export const StyledInputWrapper = styled.div<IIconWrapper>`
  position: relative;
  display: ${({ fullWidth }) => fullWidth ? 'block' : 'inline-flex'};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background-color: ${({ theme }) => theme.colors.input.background};

  ${({ icon }) => icon && `
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: url(${icon}) no-repeat center;
      background-size: contain;
      left: 10px;
      top: calc(50% - 10px);
      z-index: 100;
    }

    ${StyledTextField} {
      padding-left: 35px;
    }
  `}
`;
export const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  text-align: end;
`;

export const StyledLabelWrapper = styled.span`
  padding-right: 10px;
  color: ${({ theme }) => theme.colors.textColor};
`;

interface IIconWrapper {
  icon?: string;
  fullWidth?: boolean;
}
