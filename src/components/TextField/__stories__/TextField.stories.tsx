import React from 'react';
import Icon from 'pages/Chat/components/MessageControls/icons/send.svg';
import TextField from '..';

export default {
  title: 'components/TextField',
  component: TextField,
  argTypes: {},
};


export const Component = ({ ...props }) => (
  <div>
    <TextField name="test" {...props} />
    <TextField name="test2" {...props} icon={Icon} />
  </div>
);
