/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getMessageList, getOnlineList } from 'store/chat/selectors';
import { useSelector } from 'react-redux';
import DragNDrop from 'components/DropFile';
import Message from './Message';
import { 
  StyledWrapper, 
  StyledBackground,
  ScrollPoint,
} from './styles';

const Messages: React.FC = () => {
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
            messages.map(message => {
              const author = onlineList.find(user => user.id === message.author);
              if (!author) return null;
              const isMeAuthor = !(userId === message.author);

              return (
                <React.Fragment key={message._id}>
                  <Message 
                    message={message} 
                    author={author} 
                    isMeAuthor={isMeAuthor} 
                  />
                </React.Fragment>
              );
            })
          }
          <ScrollPoint ref={messagesRef} />
        </StyledWrapper>
      </StyledBackground>
    </DragNDrop>
  );
};

export default Messages;