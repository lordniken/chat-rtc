import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import { CheckBox } from '..';

export default {
  title: 'components/CheckBox',
  component: CheckBox,
};

export const Component = () => (
  <CheckBox name="test">{text('test', 'test')}</CheckBox>
);
