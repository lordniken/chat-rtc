import React from 'react';
import SunIcon from 'pages/Chat/components/Header/icons/sun.svg';
import MoonIcon from 'pages/Chat/components/Header/icons/moon.svg';
import Switch from '..';

export default {
  title: 'components/Switch',
  component: Switch,
};

export const Component = () => (
  <div>
    <Switch name="test" />
    <Switch name="test2" icons={[SunIcon, MoonIcon]} />
  </div>
);
