import React from 'react';
import { Formik } from 'formik';
import Switch from 'components/Switch';
import Typography from 'components/Typography';
import { getDefaultLang, getDefaultTheme } from 'utils/selectors';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getAppTheme } from 'store/app/selectors';
import { setAppTheme } from 'store/app';
import RusIcon from './icons/rus.svg';
import EnIcon from './icons/us.svg';
import SunIcon from './icons/sun.svg';
import MoonIcon from './icons/moon.svg';
import { StyledSwitchWrapper, StyledForm } from './styles';

const INITIAL_VALUES = {
  theme: getDefaultTheme() === 'dark' as TAppTheme,
  lang: getDefaultLang() === 'en',
};

const Switches: React.FC = () => {
  const { i18n } = useTranslation(['common']);
  const dispatch = useDispatch();
  const currentTheme = useSelector(getAppTheme);

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={({ lang, theme }) => {
        const selectedTheme: TAppTheme = theme ? 'dark' : 'light';
        const selectedLang = lang ? 'en' : 'ru';

        if (selectedLang !== getDefaultLang()) 
          i18n.changeLanguage(selectedLang);
        
        if (selectedTheme !== currentTheme) 
          dispatch(setAppTheme(selectedTheme));
      }}
    >
      {({ submitForm }) => (
        <StyledForm onChange={submitForm}>
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
};

export default Switches;