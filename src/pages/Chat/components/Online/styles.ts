import Typography from 'components/Typography';
import styled from 'styled-components';

export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.splitter};
  padding: 5px 10px;
  height: 59px;
  position: relative;
  transition: background-color 0.3s ease-in;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.splitter};
  }

  &:first-child {
    border-top: none;
  } 
`;

export const StyledUsername = styled.div`
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledWrapper = styled.div`
  overflow-y: auto;
`;

interface IStatusProps {
  dark?: boolean;
}

export const StyledStatus = styled(Typography)<IStatusProps>`
  color: ${({ theme }) => theme.colors.accent90};
`;