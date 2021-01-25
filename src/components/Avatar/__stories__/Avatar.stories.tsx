import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import { Avatar } from '..';

export default {
  title: 'components/Avatar',
  component: Avatar,
  argTypes: {},
};

export const Component = ({ ...props }) => (
  <Avatar icon="default" title={text('name', 'name')} {...props} />
);