import React from 'react';
import { Col } from 'components/Grid';
import TextField from 'components/TextField';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setAppTheme } from 'store/app';
import { saveDefaultTheme } from 'utils/selectors';
import Typography from 'components/Typography';
import Select from 'components/Select';
import { StyledBlock } from '../styles';

const LANG_LIST = [
  { label: 'Русская', value: 'ru' }, 
  { label: 'English', value: 'en' }
];

const Auth: React.FC = () => {
  const translation = useTranslation(['pages/login']);
  const { i18n } = useTranslation(['common']);
  const dispatch = useDispatch();

  const onLangChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const onThemeChange = (value: string) => {
    saveDefaultTheme(value);
    dispatch(setAppTheme(value as TAppTheme));
  };

  const THEME_LIST = [
    { label: translation.t('theme_light'), value: 'light' }, 
    { label: translation.t('theme_dark'), value: 'dark' }
  ];
  
  return (
    <>
      <Col gutter flex justify="flex-end">
        <TextField name="username" label={translation.t('login')} />
      </Col>
      <Col gutter flex justify="flex-end">
        <TextField name="password" type="password" label={translation.t('password')} />
      </Col>
      <StyledBlock>
        <Col gutter flex justify="space-between" align="center">
          <Typography align="center" paddingRight>{translation.t('theme')}</Typography>
          <Select name="theme" options={THEME_LIST} width={200} onChange={onThemeChange} />
        </Col> 
        <Col gutter flex justify="space-between" align="center">
          <Typography align="center" paddingRight>{translation.t('lang')}</Typography>
          <Select name="lang" options={LANG_LIST} width={200} onChange={onLangChange} />
        </Col> 
      </StyledBlock>  
    </>
  );
};

export default Auth;