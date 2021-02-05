import Typography from 'components/Typography';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  z-index: 1000;
`;

export const StyledShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: 800;
  background: ${({ theme }) => theme.colors.accent};
  border: ${({ theme }) => theme.borderRadius} dashed ${({ theme}) => theme.colors.inputBorder};
`;

export const StyledText = styled(Typography)`
  display: block;
  z-index: 1000;
  color: ${({ theme }) => theme.colors.menu};
`;

export const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;