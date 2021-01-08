import React from 'react';
import Spinner from '..';

export default {
  title: 'components/Spinner',
  component: Spinner,
  argTypes: {},
};

export const Component = ({ ...props }) => (
  <Spinner {...props} />
);
