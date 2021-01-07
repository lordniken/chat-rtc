import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
`;

interface IProps {
  position: number | null;
  index: number;
}

export const StyledFragment = styled.div.attrs<IProps>(
  ({ index, position }) => (
    !index && {
      style: {
        flex: `0 0 ${position}px`
      }
    }
  ))<IProps>`
  display: flex;
  justify-content: space-between;  
`;

interface ISeparatorProps {
  width: number;
}

export const StyledSeparator = styled.div<ISeparatorProps>`
  width: ${({ width }) => width}px;
  background: ${({ theme }) => theme.colors.splitter};
  cursor: col-resize;
  border-left: 2px solid ${({ theme }) => theme.colors.inputBackground};
  border-right: 2px solid ${({ theme }) => theme.colors.inputBackground};
`;