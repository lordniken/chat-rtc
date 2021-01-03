import { Col, Row } from 'components/Grid';
import styled from 'styled-components';

export const StyledCol = styled(Col)`
  height: calc(100vh - 60px);
  background: #fff;
  box-shadow: 3px 0 4px -2px rgba(0,0,0,0.6);
  overflow-y: auto;
`;

export const StyledRow = styled(Row)`
  height: calc(100vh - 60px);
`;