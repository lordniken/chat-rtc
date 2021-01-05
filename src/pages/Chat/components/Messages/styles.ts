import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  max-width: 50%;
`;

export const StyledMessage = styled.div`
  background: ${({ theme }) => theme.colors.accentBlueText};
  display: inline-flex;
  position: relative;
  border-radius: 0 8px 8px 8px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.splitter};

  &:before {
    content: '';
    position: absolute;
    width: 7px;
    height: 5px;
    left: -4px;
    top: -1px;
    border-left: 1px solid ${({ theme }) => theme.colors.splitter};
    border-top: 1px solid ${({ theme }) => theme.colors.splitter};
    background: ${({ theme }) => theme.colors.accentBlueText};
    -moz-transform: skew(45deg, 0deg);
    -webkit-transform: skew(45deg, 0deg);
    -o-transform: skew(45deg, 0deg);
    -ms-transform: skew(45deg, 0deg);
    transform: skew(45deg, 0deg);
  }

  &:not(:first-child) {
    margin-top: 5px;
  }
`;

export const StyledMessageWrapper = styled.div`
  display: flex;
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
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