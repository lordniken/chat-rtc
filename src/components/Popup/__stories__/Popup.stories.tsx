import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import { PopupMenu, PopupItem } from '..';

export default {
  title: 'components/Menu',
  component: PopupMenu,
  argTypes: {},
};

export const Component = () => (
  <div>
    <PopupMenu>
      <PopupItem>
        {text('test1', 'test1')}
      </PopupItem>
      <PopupItem>
        {text('test2', 'test2')}
      </PopupItem>
    </PopupMenu>
  </div>
);
