import SplitPane from 'react-split-pane';
import styled from 'styled-components';

export const StyledSplitPane = styled(SplitPane)`
  height: calc(100vh - 60px) !important;  
  background: ${({ theme }) => theme.colors.inputBackground};
  overflow-y: auto;
`;