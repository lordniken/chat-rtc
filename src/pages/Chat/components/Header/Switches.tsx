import React from 'react';
import { Formik } from 'formik';
import Switch from 'components/Switch';
import Typography from 'components/Typography';
import RusIcon from './icons/rus.svg';
import EnIcon from './icons/us.svg';
import SunIcon from './icons/sun.svg';
import MoonIcon from './icons/moon.svg';
import { StyledSwitchWrapper, StyledForm } from './styles';

const Switches: React.FC = () => (
  <Formik
    initialValues={{}}
    onSubmit={() => {}}
  >
    {() => (
      <StyledForm>
        <StyledSwitchWrapper>
          <Typography component="small" gutter>Тема</Typography>
          <Switch name="theme" icons={[SunIcon, MoonIcon]} />
        </StyledSwitchWrapper>
        <StyledSwitchWrapper>
          <Typography component="small" gutter>Язык</Typography>
          <Switch name="lang" icons={[RusIcon, EnIcon]} />
        </StyledSwitchWrapper>
      </StyledForm>
    )}
  </Formik>
);

export default Switches;