import React from 'react';
import useBreakpoints from 'hooks/useBreakpoints';
import { Avatar } from 'components/Avatar';
import Typography from 'components/Typography';
import DragNDrop from 'components/DropFile';
import { 
  StyledMessage, 
  StyledWrapper, 
  StyledText, 
  StyledBackground,
  StyledMessageHeader,
  StyledMessageWrapper, 
  StyledMessageText, 
  StyledMessageGroup, 
  StyledMessageGroupWrapper,
} from './styles';

const MOCK = [
  {
    author: 'Василий',
    message: 'Всем привет!',
    self: false,
  }
];

const Messages: React.FC = () => {
  const { isMobile } = useBreakpoints();

  return (
    <>
      <DragNDrop />
      <StyledBackground>
        <StyledWrapper>
          {
            MOCK.map((message, index, arr) => index > 0 && arr[index-1].self === message.self ?
              (
                <StyledMessageGroup key={message.message} self={message.self}>
                  <StyledMessageGroupWrapper self={message.self} isMobile={isMobile}>
                    <StyledText>
                      <StyledMessageText component="message">{message.message}</StyledMessageText>
                    </StyledText>
                  </StyledMessageGroupWrapper>
                </StyledMessageGroup>
              ) :          
              (
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
    </>
  );
};

export default Messages;