import styled from 'styled-components';

const UnreadedMessages = styled.span`
  background: ${({ theme }) => theme.colors.accent90};
  color: ${({ theme }) => theme.colors.button.color};
  position: absolute;
  padding: 2px 4px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 10px;
  right: 4px;
  top: 10px;
`;

export default UnreadedMessages;