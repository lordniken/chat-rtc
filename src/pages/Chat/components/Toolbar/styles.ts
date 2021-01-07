import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.splitter};
  height: 60px;
  background: ${({ theme }) => theme.colors.inputBackground};
`;

export const StyledUserBlock = styled.div`
  display: flex;
`;

export const StyledUserFuncs = styled.div`
  display: flex;
  margin-right: 10px;
`;