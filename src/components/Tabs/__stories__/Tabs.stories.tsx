import React from 'react';
import { Tabs, Tab } from '..';

export default {
  title: 'components/Tabs',
  component: Tabs,
  argTypes: {},
};
export const Component = ({ ...props }) => (
  <Tabs name="test" {...props}>
    <Tab value="tab1" label="Tab1">
      Tab1 content
    </Tab>
    <Tab value="tab2" label="Tab2">
      Tab2 content
    </Tab>
    <Tab value="tab3" label="Tab3">
      Tab3 content
    </Tab>            
  </Tabs>
);
