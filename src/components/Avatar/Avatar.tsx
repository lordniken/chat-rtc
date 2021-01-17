import styled, { css } from 'styled-components';
import { AvatarIcons, UserStatus } from '.';
import Man from './svg/man.svg';
import Man2 from './svg/man2.svg';
import Man3 from './svg/man3.svg';
import Girl from './svg/girl.svg';
import Girl2 from './svg/girl2.svg';
import Girl3 from './svg/girl3.svg';

interface IProps {
  size?: 'small' | 'medium' | 'large';
  icon?: keyof typeof AvatarIcons | null;
  status?: keyof typeof UserStatus;
  title: string; 
}

const Avatar = styled.div<IProps>`
  position: relative;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  border: 1px solid transparent;  
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ icon }) => {
    switch (icon) {
      case 'm1': return css`background-image: url(${Man});`;
      case 'm2': return css`background-image: url(${Man2});`;
      case 'm3': return css`background-image: url(${Man3});`;
      case 'g1': return css`background-image: url(${Girl});`;
      case 'g2': return css`background-image: url(${Girl2});`;
      case 'g3': return css`background-image: url(${Girl3});`;      
      default: return css``;
    }
  }}
  background-repeat: no-repeat;

  ${({ title, icon, theme }) => !icon && css`
    &:before {
      content: '${title[0]}';
      position: static;
      font-size: 26px;
      height: 28px;
      color: ${theme.colors.button.color};
      text-transform: uppercase;
    }
  `}

  ${({ status, theme }) => status && css`
    &:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background: ${theme.colors.status[status]};
      border: 2px solid ${theme.colors.background};
      z-index: 10;
      right: -5px;
      bottom: 0;
      border-radius: 50%;
    }
  `}

  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small': return css`
        min-width: 30px; 
        min-height: 30px;
        max-width: 30px; 
        max-height: 30px;        

        &:before {
          font-size: 16px;
          height: 16px;
        }

        &:after {
          width: 6px;
          height: 6px;
          border-width: 2px;
          right: -4px;
        }
      `;
      case 'medium': return css`
        min-width: 40px; 
        max-width: 40px; 
        min-height: 40px;
      `;
      case 'large': return css `
        min-width: 50px; 
        max-width: 40px; 
        min-height: 50px;
      `;
      default: return css``;
    }
  }}
`;

export default Avatar;