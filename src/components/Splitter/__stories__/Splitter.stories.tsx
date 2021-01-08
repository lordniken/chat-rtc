import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import Splitter from '..';

export default {
  title: 'components/Splitter',
  component: Splitter,
  argTypes: {},
};

export const Component = ({ ...props }) => (
  <Splitter min={100} max={800} isCollapsed={false} {...props}>
    <div>1</div>
    <div>2</div>
  </Splitter>

);
