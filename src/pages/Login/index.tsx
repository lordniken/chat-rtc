import React from 'react';
import { Col, Container } from 'components/Grid';
import Typography from 'components/Typography';
import { AvatarList } from 'components/Avatar';
import { useTranslation } from 'react-i18next';
import TextField from 'components/TextField';
import { Formik } from 'formik';
import { Button } from 'components/Button';
import { StyledRow } from './styles';
import { loginValidation } from './validation';

const INITIAL_FORM = { 
  username: '',
  avatar: '',
};

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
            <form onSubmit={handleSubmit}>
              <Col gutter>
                <TextField name="username" label="Ваше имя" />
              </Col>
              <Col gutter>
                Выберите аватар
                <AvatarList name="avatar" userName={values.username} />
              </Col>
              <Col>
                <Button type="submit" fullWidth disabled={!isValid}>{translation.t('sign_in')}</Button>
              </Col>
            </form>
          )}
        </Formik>
      </StyledRow>
    </Container>
  );
};

export default LoginPage;