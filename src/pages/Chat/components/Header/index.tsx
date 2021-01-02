import React from 'react';
import Avatar from 'components/Avatar';
import { StyledWrapper } from './styles';

const ChatHeader: React.FC = () => {
  return (
    <StyledWrapper>
      <Avatar title="user" status="online" />
    </StyledWrapper>
  );
};

export default ChatHeader;