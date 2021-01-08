import React from 'react';
import styled from 'styled-components';
import Splitter from '..';

export default {
  title: 'components/Splitter',
  component: Splitter,
  argTypes: {},
};

const Block = styled.div`
  padding: 10px;
  height: 200px;
`;

export const Component = ({ ...props }) => (
  <Splitter min={100} max={800} isCollapsed={false} {...props}>
    <Block>Block 1</Block>
    <Block>Block 2</Block>
  </Splitter>
);
