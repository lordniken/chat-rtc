import Typography from 'components/Typography';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 80px;
    height: 80px;
  }
`;

export const StyledShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: 800;
  background: ${({ theme}) => theme.colors.menu};
  border: ${({ theme }) => theme.borderRadius} dashed ${({ theme}) => theme.colors.inputBorder};
`;

export const StyledText = styled(Typography)`
  display: block;
  z-index: 1000;
  color: ${({ theme}) => theme.colors.menu};
`;

