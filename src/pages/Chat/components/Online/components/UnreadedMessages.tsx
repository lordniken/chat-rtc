import styled from 'styled-components';

const UnreadedMessages = styled.span`
  background: ${({ theme }) => theme.colors.accentBlue90};
  color: ${({ theme }) => theme.colors.inputBackground};
  position: absolute;
  padding: 2px 4px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 10px;
  right: 2px;
  top: 10px;
`;

export default UnreadedMessages;