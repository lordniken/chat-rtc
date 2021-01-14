import React from 'react';
import styled from 'styled-components';
import DragAndDrop from '..';

export default {
  title: 'components/Drag and drop',
  component: DragAndDrop,
};

const Wrapper = styled.div`
  position: relative;
  height: 80vh;
`;

export const Component = () => (
  <Wrapper>
    <DragAndDrop />
  </Wrapper>
);
