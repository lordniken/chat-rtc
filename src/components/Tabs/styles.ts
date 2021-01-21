import styled, { css } from 'styled-components';

interface ITabProps {
  totalTabs: number;
}

interface IActiveTab {
  activeIndex: number;
  totalTabs: number;
}

export const TabsWrapper = styled.div`
  width: 100%;
`;

export const StyledTabsHeader = styled.div<IActiveTab>`
  display: flex;
  position: relative;
  margin-bottom: 20px;

  ${({ totalTabs, activeIndex, theme }) => css`
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      width: ${100 / totalTabs}%;
      height: 3px;
      background-color: ${theme.colors.accent};
      transition: width ease .3s, color ease .3s, transform ease .3s;
      transform: translateX(${activeIndex * 100}%);
    }
  `}
`;

export const StyledTabContent = styled.div`

`;

export const StyledTab = styled.label`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  word-break: break-all;
`;

export const StyledTabWrapper = styled.div<ITabProps>`
  display: flex;
  flex: ${({ totalTabs }) => 100 / (totalTabs+1)}%;
`;

export const StyledTabInput = styled.input.attrs({ type: 'radio' })`
  display: none;
  position: absolute;
`;

