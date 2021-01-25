import React from 'react';
import useBreakpoints from 'hooks/useBreakpoints';
import { Avatar } from 'components/Avatar';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
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
  },  
];

const Messages: React.FC = () => {
  const { isMobile } = useBreakpoints();
  const translation = useTranslation(['pages/chat']);

  return (
    <DragNDrop dragText={translation.t('dragText')}>
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
                    <Avatar icon="default" title="Петр" size="small" />
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
    </DragNDrop>
  );
};

export default Messages;