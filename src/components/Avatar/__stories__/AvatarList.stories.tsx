import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import { AvatarList } from '..';

export default {
  title: 'components/AvatarList',
  component: AvatarList,
  argTypes: {},
};

export const Component = ({ ...props }) => (
  <AvatarList name="test" userName={text('username', 'username')} {...props} />
);