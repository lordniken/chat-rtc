import styled from 'styled-components';
import Typography from 'components/Typography';

export const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.accentBlueText};
  height: 60px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
`;

export const StyledLogo = styled(Typography)`
  background-image: ${({ theme }) => theme.gradients.purple};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  user-select: none;
`;