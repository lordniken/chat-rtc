import React from 'react';
import { Avatar } from 'components/Avatar';
import Typography from 'components/Typography';
import useBreakpoints from 'hooks/useBreakpoints';
import { IStateMessage } from 'store/chat/types';
import { IUserInfo } from 'store/user/types';
import humanDateTime from 'utils/messageDateTime';
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

  const readableMessageTime = (dateTime: Date) => {
    const { time } = humanDateTime(dateTime);
    return time;
  };

  return (
    <StyledMessage self={isMeAuthor}>
      <StyledMessageWrapper self={isMeAuthor} isMobile={isMobile}>
        <Avatar icon={author.avatar} title={author.username} size="small" />
        <StyledText>
          <StyledMessageHeader>
            <Typography component="strong">{author.username}</Typography>
            <StyledMessageTime component="small">{readableMessageTime(new Date(message.date))}</StyledMessageTime>
          </StyledMessageHeader>
          <StyledMessageText component="message">{message.message}</StyledMessageText>
        </StyledText>
      </StyledMessageWrapper>
    </StyledMessage>
  );
};

export default Message;