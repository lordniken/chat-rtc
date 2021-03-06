import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.splitter};
  padding: 10px;
  height: 60px;
  border-top: 2px solid ${({ theme }) => theme.colors.background};
`;

export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;

  & :not(:first-child):not(:last-child) {
    padding: 0 5px;
  }
`;

export const StyledFile = styled.input.attrs(({
  type: 'file',
}))`
  display: none;
`;