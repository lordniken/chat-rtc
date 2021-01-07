import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import Typography, { ComponentTypes } from '..';

export default {
  title: 'components/Typography',
  component: Typography,
};

export const Component = () => (
  <div>
    <Typography component={ComponentTypes.h1}>
      {text('Заголовок h1', 'Заголовок h1')}
    </Typography>
    <Typography component={ComponentTypes.h2}>
      {text('Заголовок h2', 'Заголовок h2')}
    </Typography>
    <Typography component={ComponentTypes.h3}>
      {text('Заголовок h3', 'Заголовок h3')}
    </Typography>
    <Typography component={ComponentTypes.h4}>
      {text('Заголовок h4', 'Заголовок h4')}
    </Typography>
    <Typography component={ComponentTypes.h5}>
      {text('Заголовок h5', 'Заголовок h5')}
    </Typography>
    <Typography component={ComponentTypes.p}>
      {text('Абзац', 'Абзац')}
    </Typography>
    <Typography component={ComponentTypes.message}>
      {text('Сообщение', 'Сообщение')}
    </Typography>
    <Typography component={ComponentTypes.span}>
      {text('Текст', 'Текст')}
    </Typography>
  </div>
);