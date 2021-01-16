import React from 'react';
import { Col, Container } from 'components/Grid';
import Typography from 'components/Typography';
import { AvatarList } from 'components/Avatar';
import { useTranslation } from 'react-i18next';
import TextField from 'components/TextField';
import { Form, Formik } from 'formik';
import { Button } from 'components/Button';
import Select from 'components/Select';
import { getDefaultLang } from 'utils/selectors';
import { StyledRow } from './styles';
import { loginValidation } from './validation';

const INITIAL_FORM = { 
  username: '',
  avatar: '',
  theme: 'dark',
  lang: getDefaultLang()
};

const LANG_LIST = [
  { label: 'Русская', value: 'ru' }, 
  { label: 'English', value: 'en' }
];

const LoginPage:React.FC = () => {
  const translation = useTranslation(['pages/login']);
  const { i18n } = useTranslation(['common']);

  const onLangChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const THEME_LIST = [
    { label: translation.t('theme_light'), value: 'light' }, 
    { label: translation.t('theme_dark'), value: 'dark' }
  ];

  return (
    <Container mt={50}>
      <StyledRow justify="center" align="center" wrap={false}>
        <Col gutter>
          <Typography component="h1" gutter align="center">
            {translation.t('title')}
          </Typography>
        </Col>
        <Formik
          initialValues={INITIAL_FORM}
          validationSchema={loginValidation}
          validateOnMount
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({
            isValid,
            values
          }) => (
            <Form>
              <Col gutter>
                <TextField name="username" label={translation.t('name')} />
              </Col>
              <Col gutter>
                <AvatarList name="avatar" userName={values.username} />
              </Col>
              <Col gutter flex justify="space-between" align="center">
                <Typography align="center" paddingRight>{translation.t('theme')}</Typography>
                <Select name="theme" options={THEME_LIST} width={200} />
              </Col>   
              <Col gutter flex justify="space-between" align="center">
                <Typography align="center" paddingRight>{translation.t('lang')}</Typography>
                <Select name="lang" options={LANG_LIST} width={200} onChange={onLangChange} />
              </Col>                            
              <Col>
                <Button type="submit" fullWidth disabled={!isValid}>{translation.t('sign_in')}</Button>
              </Col>
            </Form>
          )}
        </Formik>
      </StyledRow>
    </Container>
  );
};

export default LoginPage;