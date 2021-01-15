import styled from 'styled-components';
import Typography from 'components/Typography';
import { Avatar } from 'components/Avatar';

export const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 0;
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

export const StyledSwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
`;

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
  margin-left: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
`;