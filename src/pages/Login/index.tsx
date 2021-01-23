import React from 'react';
import { Col, Container } from 'components/Grid';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { Button } from 'components/Button';
import { getDefaultLang, getDefaultTheme } from 'utils/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Tab } from 'components/Tabs';
import { getIsAppFetching } from 'store/app/selectors';
import { loginValidation } from './validation';
import Auth from './components/Auth';
import Registration from './components/Registration';
import { StyledRow, StyledTabs } from './styles';
import { RegistrationAction } from './store/actions';

const INITIAL_FORM = { 
  authLogin: '',
  authPwd: '',
  regLogin: '',
  regPwd: '',
  avatar: 'default',
  theme: getDefaultTheme(),
  lang: getDefaultLang(),
  variant: 'login'
};

const LoginPage: React.FC = () => {
  const translation = useTranslation(['pages/login']);
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsAppFetching);

  return (
    <Container mt={50}>
      <StyledRow justify="flex-start" align="center" wrap={false}>
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
            dispatch(
              values.variant === 'registration' ? 
                RegistrationAction(values) : 
                null
            );
            setSubmitting(false);
          }}
        >
          {({
            isValid,
            values
          }) => (
            <Form>
              <StyledTabs name="variant">
                <Tab value="login" label={translation.t('auth')}>
                  <Auth />
                </Tab>
                <Tab value="registration" label={translation.t('reg')}>
                  <Registration username={values.regLogin} />
                </Tab>
              </StyledTabs>
              <Col>
                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={!isValid || isFetching}
                  isLoading={isFetching}
                >
                  {translation.t(values.variant === 'login' ? 'sign_in' : 'sign_up')}
                </Button>
              </Col>
            </Form>
          )}
        </Formik>
      </StyledRow>
    </Container>
  );
};

export default LoginPage;