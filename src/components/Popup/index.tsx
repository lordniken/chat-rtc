import styled, { css } from 'styled-components';

interface IItemProps {
  icon?: string;
  disabled?: boolean;
}

const PopupMenu = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.input.background};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  color: ${({ theme }) => theme.colors.input.color};
  padding: 10px 0;
`;

const PopupItem = styled.div<IItemProps>`
  color: ${({ theme }) => theme.colors.input.color};
  padding: 10px 20px 10px 30px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.splitter};
  }

  ${({ disabled = false }) => disabled && css`
    cursor: default;
    opacity: 0.5;

    &:hover {
      background-color: transparent;
    }
  `}

  ${({ icon }) => icon && css`
    &:before {
      content: '';
      position: absolute;
      background-image: url(${icon});
      background-repeat: no-repeat;
      background-size: contain;
      width: 16px;
      height: 16px;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`;

export { PopupMenu, PopupItem };
