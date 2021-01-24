import React, { createContext, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Wrapper, Notification, SuccessIcon, ErrorIcon } from './styles';

type NotificationProps = {
  type: 'success' | 'error';
  message: string;
  delay?: number;
};

interface ExternalNotificationProps extends NotificationProps {
  id: number;
}

interface INotificationsContext {
  createNotification: (x: NotificationProps) => void;
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
    setTimeout(() => 
      setNotifcations(prev => prev.filter(i => i.id !== item.id)), item.delay || 5000);
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
              onAnimationComplete={() => deleteNotification(item)}
              layout
            >
              {
                item.type === 'success' ? <SuccessIcon size={32} /> : <ErrorIcon size={32} />
              }
              {item.message}
            </Notification>
          ))}
        </AnimatePresence>
      </Wrapper>
    </NotificationsContext.Provider>
  );
};

export default Notifications;
