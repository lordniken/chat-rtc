import React from 'react';
import { Col, Container } from 'components/Grid';
import Typography from 'components/Typography';
import { AvatarList } from 'components/Avatar';
import { useTranslation } from 'react-i18next';
import TextField from 'components/TextField';
import { Form, Formik } from 'formik';
import { Button } from 'components/Button';
import Select from 'components/Select';
import { StyledRow } from './styles';
import { loginValidation } from './validation';

const INITIAL_FORM = { 
  username: '',
  avatar: '',
  theme: 'dark',
  lang: 'ru'
};

const THEMES = [
  { label: 'Светлая', value: 'light' }, 
  { label: 'Темная', value: 'dark' }
];

const LANGS = [
  { label: 'Русская', value: 'ru' }, 
  { label: 'Английская', value: 'en' }
];

const LoginPage:React.FC = () => {
  const translation = useTranslation(['pages/login']);

  return (
    <Container>
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
            handleSubmit,
            isValid,
            values
          }) => (
            <Form>
              <Col gutter>
                <TextField name="username" label="Ваше имя" />
              </Col>
              <Col gutter>
                <AvatarList name="avatar" userName={values.username} />
              </Col>
              <Col gutter flex justify="space-between" align="center">
                <Typography align="center" paddingRight>Цветовая схема</Typography>
                <Select name="theme" options={THEMES} width={200} />
              </Col>   
              <Col gutter flex justify="space-between" align="center">
                <Typography align="center" paddingRight>Локализация</Typography>
                <Select name="lang" options={LANGS} width={200} />
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