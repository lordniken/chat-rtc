import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.accentBlue};
  color: ${({ theme }) => theme.colors.accentBlueText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  text-transform: uppercase;
  padding: 11px 48px;
  outline: 0;
  cursor: pointer;
  transition: background 0.2s ease-out;

  &:hover{
    background: ${({ theme }) => theme.colors.accentBlue90};
  }

  &:active{
    background: ${({ theme }) => theme.colors.accentBlue};
  }

  &:disabled{
    background: ${({ theme }) => theme.colors.accentBlue50};
    cursor: default;
  }
`;