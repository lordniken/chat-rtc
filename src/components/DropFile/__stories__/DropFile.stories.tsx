import Typography from 'components/Typography';
import React from 'react';
import DragAndDrop from '..';

export default {
  title: 'components/Drag and drop',
  component: DragAndDrop,
};

export const Component = () => (
  <DragAndDrop>
    <Typography>Перетащите файл</Typography>
  </DragAndDrop>
);
