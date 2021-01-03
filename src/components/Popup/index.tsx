import styled, { css } from 'styled-components';

interface IItemProps {
  icon?: string;
}

const PopupMenu = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.accentBlueText};
  border: 1px solid ${({ theme }) => theme.colors.splitter};
  color: ${({ theme }) => theme.colors.menu};
  padding: 10px 0;
`;

const PopupItem = styled.div<IItemProps>`
  color: ${({ theme }) => theme.colors.menu};
  padding: 10px 20px 10px 30px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.splitter};
  }

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
