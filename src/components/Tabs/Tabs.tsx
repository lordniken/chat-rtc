import React, { useMemo } from 'react';
import { useField } from 'formik';
import Tab from './Tab';
import { StyledTabContent, StyledTabsHeader, StyledTabWrapper, TabsWrapper } from './styles';

interface IProps {
  name: string;
  defaultTab?: number;
}

const Tabs: React.FC<IProps> = ({ children, defaultTab = 0, name }) => {
  const items: React.ReactElement[] = 
    useMemo(() => React.Children.toArray(children) as React.ReactElement[], [children]);
  const [,meta] = useField({ name });
  if (!meta.value) meta.value = items[defaultTab]?.props.value;

  const activeIndex = items.findIndex(el => el.props.value === meta.value);

  return (
    <TabsWrapper>
      <StyledTabsHeader activeIndex={activeIndex} totalTabs={items.length}>
        {items.map(tab => (
          <StyledTabWrapper key={tab.props.value} totalTabs={items.length}>
            <Tab name={name} {...tab.props} />
          </StyledTabWrapper>
        ))}
      </StyledTabsHeader>
      <StyledTabContent>
        {items.find(el => el.props.value === meta.value)?.props.children}
      </StyledTabContent>
    </TabsWrapper>
  );
};

export default Tabs;
