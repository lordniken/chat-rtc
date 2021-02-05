import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'components/Avatar';
import Typography from 'components/Typography';
import useBreakpoints from 'hooks/useBreakpoints';
import { IStateMessageList } from 'store/chat/types';
import { IUserInfo } from 'store/user/types';
import humanDateTime from 'utils/messageDateTime';
import { 
  StyledMessage, 
  StyledMessageHeader, 
  StyledMessageText, 
  StyledMessageTime, 
  StyledMessageWrapper, 
  StyledText,
  StyledMedia,
} from './styles';

interface IProps {
  message: IStateMessageList;
  author: IUserInfo;
}

const Message: React.FC<IProps> = ({ message, author }) => {
  const { isMobile } = useBreakpoints();
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const isMeAuthor = !(userId === message.author);

  const readableMessageTime = useCallback((dateTime: Date) => {
    const { time } = humanDateTime(dateTime);
    return time;
  }, []);

  return (
    <StyledMessage self={isMeAuthor} isMedia={message.type === 'media'}>
      <StyledMessageWrapper self={isMeAuthor} isMobile={isMobile}>
        <Avatar icon={author.avatar} title={author.username} size="small" />
        <StyledText>
          <StyledMessageHeader>
            <Typography component="strong">{author.username}</Typography>
            <StyledMessageTime component="small">{readableMessageTime(new Date(message.date))}</StyledMessageTime>
          </StyledMessageHeader>
          {
            message.type === 'message'? 
              <StyledMessageText component="message">{message.message}</StyledMessageText>
              :
              <StyledMedia src={`${process.env.HOST}/media/?id=${message.message}`} alt="" />
          }
        </StyledText>
      </StyledMessageWrapper>
    </StyledMessage>
  );
};

export default Message;