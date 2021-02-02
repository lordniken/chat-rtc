import Typography from 'components/Typography';
import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface IProps {
  self: boolean;
  isMobile?: boolean;
}

export const StyledMessageTime = styled(Typography)`
  color: ${({ theme }) => theme.colors.input.headerColor};
  opacity: 0.3;
`;

export const StyledMessage = styled.div<IProps>`
  display: flex;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 2px;
    ${({ self }) => self ? css`
      border-right: 1px solid ${({ theme }) => theme.colors.input.border};
      right: -2px;
      -moz-transform: skew(-45deg, 0deg);
      -webkit-transform: skew(-45deg, 0deg);
      -o-transform: skew(-45deg, 0deg);
      -ms-transform: skew(-45deg, 0deg);
      transform: skew(-45deg, 0deg);
    `: css`
      left: -2px;
      border-left: 1px solid ${({ theme }) => theme.colors.input.border};
      -moz-transform: skew(45deg, 0deg);
      -webkit-transform: skew(45deg, 0deg);
      -o-transform: skew(45deg, 0deg);
      -ms-transform: skew(45deg, 0deg);
      transform: skew(45deg, 0deg);
    `}
    top: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.input.border};
    background: ${({ theme }) => theme.colors.splitter};
    z-index: 500;
  }

  ${({ self }) => self && css`
    justify-content: flex-end;
  `}  

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const StyledMessageWrapper = styled.div<IProps>`
  background: ${({ theme }) => theme.colors.splitter};
  display: inline-flex;
  position: relative;
  padding: 10px;
  border-radius: ${({ self }) => self ? '8px 0 8px 8px' : '0 8px 8px 8px'};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  width: ${({ isMobile }) => isMobile ? '95%' : '45%'};
  max-width: ${({ isMobile }) => isMobile ? '95%' : '45%'};
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
  max-width: calc(100% - 30px);
`;

export const StyledBackground = styled.div`
  height: calc(100vh - 180px);
  background: ${({ theme }) => theme.gradients.footer};
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex: 1;
`;

export const StyledMessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMessageText = styled(Typography)`
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const ScrollPoint = styled.div`
  padding: 5px;
`;

export const DaySplitter = styled.div`
  text-align: center;
  margin: 20px 0 10px 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.input.border};
    left: 0;
    top: 10px;
    bottom: 0;
  }
`;

export const DaySplitterDate = styled(Typography)`
  padding: 8px 30px;
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background:  ${({ theme }) => theme.colors.splitter};;
  border-radius: 6px;
  position: relative;
`;