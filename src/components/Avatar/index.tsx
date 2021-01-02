import styled, { css } from 'styled-components';
import Man from './svg/man.svg';
import Man2 from './svg/man2.svg';
import Man3 from './svg/man3.svg';
import Girl from './svg/girl.svg';
import Girl2 from './svg/girl2.svg';
import Girl3 from './svg/girl3.svg';

interface IProps {
  size?: 'small' | 'medium' | 'large';
  icon?: 'm1' | 'm2' | 'm3' | 'g1' | 'g2' | 'g3';
  title: string;
}

const Avatar = styled.div<IProps>`
  position: relative;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentBlue};
  border: 1px solid transparent;  
  transition: border-color ease-in 0.3s;

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
      position: absolute;
      font-size: 26px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: ${theme.colors.accentBlueText};
      text-transform: uppercase;
    }
  `}

  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small': return css `width: 30px; height: 30px;`;
      case 'medium': return css `width: 40px; height: 40px;`;
      case 'large': return css `width: 50px; height: 50px;`;
      default: return css``;
    }
  }}

  &:hover {
    border-color: ${({ theme }) => theme.colors.inputBorder};
    cursor: pointer;
  }
`;

export default Avatar;