import { Col, Row } from 'components/Grid';
import styled from 'styled-components';

export const StyledCol = styled(Col)`
  height: calc(100vh - 60px);
  background: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  overflow-y: auto;
`;

export const StyledRow = styled(Row)`
  height: calc(100vh - 60px);
`;