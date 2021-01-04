import styled from 'styled-components';
import Typography from 'components/Typography';

export const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: ${({ theme }) => theme.gradients.header};
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.splitter};
`;

export const StyledLogo = styled(Typography)`
  background-image: ${({ theme }) => theme.gradients.purple};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  user-select: none;
`;