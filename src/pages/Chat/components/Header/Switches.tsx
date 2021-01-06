import React from 'react';
import { Switch } from 'components/Switch';
import Typography from 'components/Typography';
import RusIcon from './icons/rus.svg';
import EnIcon from './icons/us.svg';
import SunIcon from './icons/sun.svg';
import MoonIcon from './icons/moon.svg';
import { StyledSwitchWrapper } from './styles';

const Switches: React.FC = () => (
  <>
    <StyledSwitchWrapper>
      <Typography component="small" gutter>Тема</Typography>
      <Switch icons={[SunIcon, MoonIcon]} />
    </StyledSwitchWrapper>
    <StyledSwitchWrapper>
      <Typography component="small" gutter>Язык</Typography>
      <Switch icons={[RusIcon, EnIcon]} />
    </StyledSwitchWrapper>
  </>
);

export default Switches;