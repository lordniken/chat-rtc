import styled from 'styled-components';
import CloseIcon from './icons/close.svg';

export const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9000;
`;

export const Shadow = styled(Wrapper)`
  background: #000;
  opacity: 0.4;
`;

export const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background: ${({ theme }) => theme.colors.splitter};
  z-index: 10000;
`;
