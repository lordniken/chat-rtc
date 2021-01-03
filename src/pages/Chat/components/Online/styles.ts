import Typography from 'components/Typography';
import styled from 'styled-components';

export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.splitter};
  padding: 5px 10px;
  height: 50px;
  transition: background-color 0.3s ease-in;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.splitter};
  }

  &:first-child {
    border-top: none;
  } 
`;

export const StyledUsername = styled.span`
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
`;

export const StyledWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accentBlueText};
`;

export const StyledStatus = styled(Typography)`
  color: ${({ theme }) => theme.colors.inputBorder};
`;