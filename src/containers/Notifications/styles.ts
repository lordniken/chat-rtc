import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Check } from '@styled-icons/material/Check';
import { ErrorOutline } from '@styled-icons/material/ErrorOutline';

export const Wrapper = styled.div`
  position: absolute;
  width: 350px;
  top: 10px;
`;

export const Notification = styled(motion.div)`
  background: ${({ theme }) => theme.colors.notifications.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px;
  margin-bottom: 10px;
  color: #ddd;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.colors.notifications.shadow};
`;

export const SuccessIcon = styled(Check)`
  color: ${({ theme }) => theme.colors.notifications.success};
  padding-right: 10px;
  min-width: 24px;
`;

export const ErrorIcon = styled(ErrorOutline)`
  color: ${({ theme }) => theme.colors.notifications.error};
  padding-right: 10px;
  min-width: 24px;
`;

