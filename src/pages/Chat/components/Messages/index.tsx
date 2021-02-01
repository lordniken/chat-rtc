/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react';
import useBreakpoints from 'hooks/useBreakpoints';
import { Avatar } from 'components/Avatar';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getMessageList, getOnlineList } from 'store/chat/selectors';
import { useSelector } from 'react-redux';
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

const Messages: React.FC = () => {
  const { isMobile } = useBreakpoints();
  const translation = useTranslation(['pages/chat']);
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const onlineList = useSelector(getOnlineList);
  const messageList = useSelector(getMessageList);
  const messages = messageList.filter(message => message.author === userId || message.to === userId);

  useEffect(() => {
    messagesRef?.current?.scrollIntoView({ behavior: 'auto' });
  }, [messagesRef, messages]);


  return (
    <DragNDrop dragText={translation.t('dragText')}>
      <StyledBackground>
        <StyledWrapper>
          {
            messages.map((message, index, arr) => {
              const author = onlineList.find(user => user.id === message.author);
              if (!author) return null;
              const isMeAuthor = !(userId === message.author);
              const date = new Date(message.date);
              const messageTime = 
                date.toLocaleDateString() === new Date().toLocaleDateString()
                  ? date.toLocaleTimeString() : `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

              return index > 0 && arr[index-1].author === message.author ?
                (
                  <StyledMessageGroup key={message._id} self={isMeAuthor}>
                    <StyledMessageGroupWrapper self={isMeAuthor} isMobile={isMobile}>
                      <StyledText>
                        <StyledMessageText component="message">{message.message}</StyledMessageText>
                      </StyledText>
                    </StyledMessageGroupWrapper>
                  </StyledMessageGroup>
                ) :
                (
                  <StyledMessage key={message._id} self={isMeAuthor}>
                    <StyledMessageWrapper self={isMeAuthor} isMobile={isMobile}>
                      <Avatar icon={author.avatar} title={author.username} size="small" />
                      <StyledText>
                        <StyledMessageHeader>
                          <Typography component="strong">{author.username}</Typography>
                          <Typography component="small">{messageTime}</Typography>
                        </StyledMessageHeader>
                        <StyledMessageText component="message">{message.message}</StyledMessageText>
                      </StyledText>
                    </StyledMessageWrapper>
                  </StyledMessage>
                );
            })
          }
          <div ref={messagesRef} />
        </StyledWrapper>
      </StyledBackground>
    </DragNDrop>
  );
};

export default Messages;