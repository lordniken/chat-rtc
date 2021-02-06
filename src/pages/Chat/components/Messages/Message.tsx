import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'components/Avatar';
import Typography from 'components/Typography';
import useBreakpoints from 'hooks/useBreakpoints';
import useModal from 'hooks/useModal';
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
  StyledImage,
  ZoomedImage,
  StyledAudio
} from './styles';

interface IMessageType {
  message: IStateMessageList;
}

interface IProps extends IMessageType {
  author: IUserInfo;
}

const MessageType: React.FC<IMessageType> = ({ message }) => {
  const { setContent } = useModal();

  const onImageClick = (url: string) => {
    setContent(
      <ZoomedImage 
        src={`${process.env.HOST}/media/?id=${url}`} 
        alt="" 
        onClick={() => setContent(null)} 
      />
    );
  };

  if (message.type === 'image') {
    return <StyledImage src={`${process.env.HOST}/media/?id=${message.message}`} alt="" onClick={() => onImageClick(message.message)} />;
  } 
  if (message.type === 'voice') {
    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <StyledAudio src={`${process.env.HOST}/media/?id=${message.message}`} controls  />
    );
  }
  return <StyledMessageText component="message">{message.message}</StyledMessageText>;
};

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
    <StyledMessage self={isMeAuthor} isImage={message.type === 'image'}>
      <StyledMessageWrapper self={isMeAuthor} isMobile={isMobile}>
        <Avatar icon={author.avatar} title={author.username} size="small" />
        <StyledText>
          <StyledMessageHeader>
            <Typography component="strong">{author.username}</Typography>
            <StyledMessageTime component="small">{readableMessageTime(new Date(message.date))}</StyledMessageTime>
          </StyledMessageHeader>
          <MessageType message={message} />
        </StyledText>
      </StyledMessageWrapper>
    </StyledMessage>
  );
};

export default Message;