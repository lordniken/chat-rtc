/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getMessageList, getMessagesCount, getOnlineList } from 'store/chat/selectors';
import { useDispatch, useSelector } from 'react-redux';
import humanDateTime from 'utils/messageDateTime';
import DragNDrop from 'components/DropFile';
import { FetchMessageList, SendMedia } from 'store/chat/actions';
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
  const isFetchingRef = useRef(false);
  const dispatch = useDispatch();
  const dateRef = useRef<Date | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const onlineList = useSelector(getOnlineList);
  const messageList = useSelector(getMessageList);
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const messages = messageList.filter(message => message.author === userId || message.to === userId);
  const messagesCount = useSelector(getMessagesCount);

  const readableMessageDate = useCallback((dateTime: Date) => {
    const { date } = humanDateTime(dateTime);
    if (typeof date === 'string') return date;
    if (date?.days) return `${date.days} ${translation.t(`messages.${date.translation}`)}`;

    return translation.t(`messages.${date?.translation}`);
  }, []);

  const fetchMoreMessages = () => {
    if (messagesRef.current && messagesRef.current.scrollTop < 400) {
      if (messages.length !== messagesCount && !isFetchingRef.current) {
        isFetchingRef.current = true;
        dispatch(FetchMessageList({ id: userId, count: messages.length }));
      }
    }
  };

  useEffect(() => {
    messagesRef.current?.addEventListener('scroll', fetchMoreMessages);
    return () => messagesRef.current?.removeEventListener('scroll', fetchMoreMessages);
  }, [messages]);

  useEffect(() => {
    if (!isFetchingRef.current)
      lastMessageRef?.current?.scrollIntoView({ behavior: 'auto' });
    isFetchingRef.current = false;
  }, [messages, userId]);  

  const onDrop = (e: React.DragEvent) => {
    dispatch(SendMedia({ media: e.dataTransfer?.files[0], to: userId }));   
  };

  return (
    <DragNDrop dragText={translation.t('dragText')} onDrop={onDrop}>
      <StyledBackground ref={messagesRef}>
        <StyledWrapper>
          {
            messages.map((message, index, arr) => {
              const author = onlineList.find(user => user.id === message.author);
              if (!author) return null;

              if (new Date(message.date) !== dateRef.current) 
                dateRef.current = new Date(arr[index === 0 ? index : index-1]?.date);

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
                  />
                </React.Fragment>
              );
            })
          }
          <ScrollPoint ref={lastMessageRef} />
        </StyledWrapper>
      </StyledBackground>
    </DragNDrop>
  );
};

export default Messages;