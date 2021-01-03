import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.splitter};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-left: none;
  height: 60px;
`;

export const StyledUserBlock = styled.div`
  display: flex;
`;

export const StyledUserFuncs = styled.div`
  display: flex;
`;