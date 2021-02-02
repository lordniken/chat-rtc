import React from 'react';
import { Avatar } from 'components/Avatar';
import Typography from 'components/Typography';
import useBreakpoints from 'hooks/useBreakpoints';
import { IStateMessage } from 'store/chat/types';
import { IUserInfo } from 'store/user/types';
import { 
  StyledMessage, 
  StyledMessageHeader, 
  StyledMessageText, 
  StyledMessageTime, 
  StyledMessageWrapper, 
  StyledText 
} from './styles';

interface IProps {
  message: IStateMessage;
  isMeAuthor: boolean;
  author: IUserInfo;
}

const Message: React.FC<IProps> = ({ message, isMeAuthor, author }) => {
  const { isMobile } = useBreakpoints();

  return (
    <StyledMessage self={isMeAuthor}>
      <StyledMessageWrapper self={isMeAuthor} isMobile={isMobile}>
        <Avatar icon={author.avatar} title={author.username} size="small" />
        <StyledText>
          <StyledMessageHeader>
            <Typography component="strong">{author.username}</Typography>
            <StyledMessageTime component="small">10:00</StyledMessageTime>
          </StyledMessageHeader>
          <StyledMessageText component="message">{message.message}</StyledMessageText>
        </StyledText>
      </StyledMessageWrapper>
    </StyledMessage>
  );
};

export default Message;