import styled from 'styled-components';

export const StyledSplitPane = styled.aside`
  height: calc(100vh - 60px) !important;  
  background: ${({ theme }) => theme.colors.inputBackground};
  overflow-y: auto;
  width: 100%;
`;