import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Check, ErrorOutline } from '@styled-icons/material';
import Typography from 'components/Typography';

export const Wrapper = styled.div`
  position: absolute;
  width: 350px;
  top: 10px;
`;

export const NotificationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Notification = styled(motion.div)`
  background: ${({ theme }) => theme.colors.notifications.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  padding: 10px 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.colors.notifications.shadow};
`;

export const NotificationMessage = styled(Typography)`
  color: #ddd;
  padding: 0 5px;
`;

export const SuccessIcon = styled(Check)`
  color: ${({ theme }) => theme.colors.notifications.success};
  min-width: 24px;
`;

export const ErrorIcon = styled(ErrorOutline)`
  color: ${({ theme }) => theme.colors.notifications.error};
  min-width: 32px;
`;

export const NotificationContent = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseNotification = styled.div`
  z-index: 100;
  max-width: 20px;
  min-width: 20px;
  cursor: pointer;
`;