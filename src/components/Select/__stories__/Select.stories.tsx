import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import styled from 'styled-components';
import Select from '..';

export default {
  title: 'components/Select',
  component: Select,
  argTypes: {},
};

const MENU = [
  {
    label: '1',
    value: '1'
  },
  {
    label: '2',
    value: '2'
  }
];

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

export const Component = ({ ...props }) => (
  <Wrapper>
    <Select options={MENU} placeholder={text('test', 'test')} name="test" {...props}>{text('test', 'test')}</Select>
  </Wrapper>
);
