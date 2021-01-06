import Avatar from 'components/Avatar';
import Typography from 'components/Typography';
import React from 'react';
import { StyledMessage, StyledWrapper, StyledText, StyledBackground, StyledMessageHeader, StyledMessageWrapper, StyledMessageText } from './styles';

const MOCK = [
  {
    author: 'Василий',
    message: 'Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!Всем привет!',
    self: false,
  }
];

const Messages: React.FC = () => {
  return (
    <StyledBackground>
      <StyledWrapper>
        {
          MOCK.map(message => (
            <StyledMessage key={message.message} self={message.self}>
              <StyledMessageWrapper self={message.self}>
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