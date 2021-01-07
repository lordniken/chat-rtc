import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import Icon from 'assets/icons/path.svg';
import styled from 'styled-components';
import { Button } from '..';

const StyledButton = styled(Button)`
  margin: 5px 0;
`;

export default {
  title: 'components/Button',
  component: Button,
};

export const Component = () => (
  <div>
    <StyledButton>{text('test', 'test')}</StyledButton>
    <StyledButton icon={Icon}>{text('test', 'test')}</StyledButton>
    <StyledButton icon={Icon} />
  </div>
);