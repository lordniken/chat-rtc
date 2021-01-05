import Avatar from 'components/Avatar';
import Typography from 'components/Typography';
import React from 'react';
import { StyledMessage, StyledWrapper, StyledText, StyledBackground, StyledMessageHeader } from './styles';

const MOCK = [
  {
    author: 'Василий',
    message: 'Всем привет!'
  }
];

const Messages: React.FC = () => {
  return (
    <StyledBackground>
      <StyledWrapper>
        {
          MOCK.map(message => (
            <StyledMessage key={message.message}>
              <Avatar title="Петр" icon="m1" size="small" />
              <StyledText>
                <StyledMessageHeader>
                  <Typography component="strong">Петр</Typography>
                  <Typography component="small">10:00</Typography>
                </StyledMessageHeader>
                <Typography component="message">{message.message}</Typography>
              </StyledText>
            </StyledMessage>
          ))
        }
      </StyledWrapper>
    </StyledBackground>
  );
};

export default Messages;