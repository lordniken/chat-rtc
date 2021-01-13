import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.splitter};
  padding: 10px;
  height: 60px;
  border-top: 1px solid ${({ theme }) => theme.colors.inputBorder};
`;

export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;

  & :not(:first-child):not(:last-child) {
    padding: 0 5px;
  }
`;