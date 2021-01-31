import Typography from 'components/Typography';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.splitter};
  padding: 5px 10px;
  height: 59px;
  position: relative;
  transition: background-color 0.3s ease-in;

  &:hover {
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

export const StyledStatus = styled(Typography)`
  color: ${({ theme }) => theme.colors.accent90};
`;

interface ILinkProps {
  selected: boolean;
}

export const StyledLink = styled(Link)<ILinkProps>`
  text-decoration: none;

  ${({ selected }) => selected && css`
    cursor: default; 

    ${StyledUserWrapper} {
      background-color: ${({ theme }) => theme.colors.splitter};
    }
  `}
`;