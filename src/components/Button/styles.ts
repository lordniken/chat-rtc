import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.accentBlue};
  color: ${({ theme }) => theme.colors.accentBlueText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  text-transform: uppercase;
  padding: 0;
  outline: 0;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.accentBlue90};
  }

  &:active {
    background: ${({ theme }) => theme.colors.accentBlue};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.accentBlue50};
    cursor: default;
  }

  span {
    display: flex;
    align-items: center;
    padding: 8px 48px;
  }
`;

export const StyledButtonWithIcon = styled(StyledButton)`
  img {
    padding-right: 8px;
  }
`;

export const StyledButtonWithoutText = styled(StyledButtonWithIcon)`
  border-radius: 50px;

  span {
    padding: 11px;
  }
  
  img {
    padding: 0;
  }
`;