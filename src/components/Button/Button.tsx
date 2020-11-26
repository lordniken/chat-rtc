import React from 'react';
import { StyledButton } from './styles';

export const Button: React.FC = () => {
  return (
    <>
      <StyledButton type="button" disabled>Заблокировано</StyledButton>
      <StyledButton type="button">Текст</StyledButton>
    </>
  );
};