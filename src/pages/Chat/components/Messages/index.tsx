/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getMessageList, getOnlineList } from 'store/chat/selectors';
import { useSelector } from 'react-redux';
import humanDateTime from 'utils/messageDateTime';
import DragNDrop from 'components/DropFile';
import Message from './Message';
import { 
  StyledWrapper, 
  StyledBackground,
  ScrollPoint,
  DaySplitter,
  DaySplitterDate,
} from './styles';

const Messages: React.FC = () => {
  const translation = useTranslation(['pages/chat']);
  const dateRef = useRef<Date | null>(null);
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const onlineList = useSelector(getOnlineList);
  const messageList = useSelector(getMessageList);
  const messages = messageList.filter(message => message.author === userId || message.to === userId);

  useEffect(() => {
    messagesRef?.current?.scrollIntoView({ behavior: 'auto' });
  }, [messagesRef, messages]);

  const readableMessageDate = (dateTime: Date) => {
    const { date } = humanDateTime(dateTime);
    if (typeof date === 'string') return date;
    if (date?.days) return `${date.days} ${translation.t(`messages.${date.translation}`)}`;

    return translation.t(`messages.${date?.translation}`);
  };

  return (
    <DragNDrop dragText={translation.t('dragText')}>
      <StyledBackground>
        <StyledWrapper>
          {
            messages.map((message, index, arr) => {
              const author = onlineList.find(user => user.id === message.author);
              if (!author) return null;
              const isMeAuthor = !(userId === message.author);

              if (new Date(message.date) !== dateRef.current) {
                dateRef.current = new Date(arr[index === 0 ? index : index-1]?.date);
              }

              return (
                <React.Fragment key={message._id}>
                  {
                    dateRef.current.toLocaleDateString() !== new Date(message.date).toLocaleDateString() && (
                      <DaySplitter>
                        <DaySplitterDate component="small">{readableMessageDate(dateRef.current)}</DaySplitterDate>
                      </DaySplitter>
                    )
                  }
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