import Typography from 'components/Typography';
import styled, { css } from 'styled-components';

interface IProps {
  self?: boolean;
}

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
      border-right: 1px solid ${({ theme }) => theme.colors.splitter};
      right: -2px;
      -moz-transform: skew(-45deg, 0deg);
      -webkit-transform: skew(-45deg, 0deg);
      -o-transform: skew(-45deg, 0deg);
      -ms-transform: skew(-45deg, 0deg);
      transform: skew(-45deg, 0deg);
    `: css`
      left: -2px;
      border-left: 1px solid ${({ theme }) => theme.colors.splitter};
      -moz-transform: skew(45deg, 0deg);
      -webkit-transform: skew(45deg, 0deg);
      -o-transform: skew(45deg, 0deg);
      -ms-transform: skew(45deg, 0deg);
      transform: skew(45deg, 0deg);
    `}
    top: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.splitter};
    background: ${({ theme }) => theme.colors.accentBlueText};
    z-index: 999;
  }

  ${({ self }) => self && css`
    justify-content: flex-end;
  `}  

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const StyledMessageWrapper = styled.div<IProps>`
  background: ${({ theme }) => theme.colors.accentBlueText};
  display: inline-flex;
  position: relative;
  padding: 10px;
  border-radius: ${({ self }) => self ? '8px 0 8px 8px' : '0 8px 8px 8px'};
  border: 1px solid ${({ theme }) => theme.colors.splitter};
  width: 50%;
  max-width: 50%;
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
`;

export const StyledMessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & small {
    color: ${({ theme }) => theme.colors.inputBorder};
  }
`;

export const StyledMessageText = styled(Typography)`
  overflow-wrap: break-word;
`;