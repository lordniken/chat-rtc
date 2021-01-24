import React, { createContext, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Close } from '@styled-icons/material';
import { Wrapper, NotificationWrapper, Notification, NotificationContent, SuccessIcon, ErrorIcon, CloseNotification, NotificationMessage } from './styles';

type NotificationProps = {
  type: 'success' | 'error';
  message: string;
  delay?: number;
};

interface ExternalNotificationProps extends NotificationProps {
  id: number;
}

interface INotificationsContext {
  createNotification: ({ type, message, delay }: NotificationProps) => void;
}

export const NotificationsContext = createContext<INotificationsContext>({
  createNotification: () => {},
});

const Notifications: React.FC = ({ children }) => {
  const idRef = useRef(0);
  const [notifications, setNotifcations] = useState<ExternalNotificationProps[]>([]);

  const createNotification = (props: NotificationProps) => {
    idRef.current += 1;
    setNotifcations(
      (id => 
        (prev: ExternalNotificationProps[]) => [...prev, { ...props, id }]
      )(idRef.current)
    );
  };

  const deleteNotification = (item: ExternalNotificationProps) => {
    setNotifcations(prev => prev.filter(i => i.id !== item.id));
  };

  const deleteNotificationWithTimeout = (item: ExternalNotificationProps) => {
    setTimeout(() => deleteNotification(item), item.delay || 5000);
  };
    
  return (
    <NotificationsContext.Provider
      value={{
        createNotification
      }}
    >
      {children}
      <Wrapper>
        <AnimatePresence initial={false}>
          {notifications.map(item => (
            <Notification
              key={item.id}
              initial={{ opacity: 0, scale: 0.5, x: -300 }}
              animate={{ opacity: 1, scale: 1, x: 10 }}
              exit={{ opacity: 0, scale: 0.5, x: -300 }}
              onAnimationComplete={() => deleteNotificationWithTimeout(item)}
              layout
            >
              <NotificationWrapper>
                <NotificationContent>
                  {
                    item.type === 'success' ? <SuccessIcon size={32} /> : <ErrorIcon size={32} />
                  }
                  <NotificationMessage component="message">{item.message}</NotificationMessage>
                </NotificationContent>
                <CloseNotification onClick={() => deleteNotification(item)}>
                  <Close size={20} color="#ddd" />
                </CloseNotification>
              </NotificationWrapper>
            </Notification>
            
          ))}
        </AnimatePresence>
      </Wrapper>
    </NotificationsContext.Provider>
  );
};

export default Notifications;
