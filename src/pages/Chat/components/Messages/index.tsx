import React from 'react';
import useBreakpoints from 'hooks/useBreakpoints';
import Avatar from 'components/Avatar';
import Typography from 'components/Typography';
import { StyledMessage, StyledWrapper, StyledText, StyledBackground, StyledMessageHeader, StyledMessageWrapper, StyledMessageText } from './styles';

const MOCK = [
  {
    author: 'Василий',
    message: 'Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!',
    self: false,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  },
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: true,
  }
];

const Messages: React.FC = () => {
  const { isMobile } = useBreakpoints();

  return (
    <StyledBackground>
      <StyledWrapper>
        {
          MOCK.map(message => (
            <StyledMessage key={message.message} self={message.self}>
              <StyledMessageWrapper self={message.self} isMobile={isMobile}>
                <Avatar title="Петр" icon="m1" size="small" />
                <StyledText>
                  <StyledMessageHeader>
                    <Typography component="strong">Петр</Typography>
                    <Typography component="small">10:00</Typography>
                  </StyledMessageHeader>
                  <StyledMessageText component="message">{message.message}</StyledMessageText>
                </StyledText>
              </StyledMessageWrapper>
            </StyledMessage>
          ))
        }
      </StyledWrapper>
    </StyledBackground>
  );
};

export default Messages;