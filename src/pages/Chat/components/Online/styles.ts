import styled from 'styled-components';

export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.accentBlueText};
  border-top: 1px solid ${({ theme }) => theme.colors.inputBorder};
  padding: 5px 10px;

  & span {
    padding: 0 10px;
    text-overflow: clip;
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledWrapper = styled.div`

`;