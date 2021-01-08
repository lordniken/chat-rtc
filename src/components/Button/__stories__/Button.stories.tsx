import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import Icon from 'pages/Chat/components/MessageControls/icons/send.svg';
import styled from 'styled-components';
import { Button } from '..';

const StyledButton = styled(Button)`
  margin: 5px 0;
`;

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {},
};

export const Component = ({ ...props }) => (
  <div>
    <StyledButton {...props}>{text('test', 'test')}</StyledButton>
    <StyledButton {...props} icon={Icon}>{text('test', 'test')}</StyledButton>
    <StyledButton {...props} icon={Icon} />
  </div>
);