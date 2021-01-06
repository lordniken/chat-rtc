import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.splitter};
  padding: 10px;
  height: 60px;
  border-top: 1px solid ${({ theme }) => theme.colors.inputBorder};
`;

export const ControlWrapper = styled.div`
  display: flex;
`;