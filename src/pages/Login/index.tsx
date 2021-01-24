import React, { useCallback, useEffect } from 'react';
import { Col, Container } from 'components/Grid';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { Button } from 'components/Button';
import { getDefaultLang, getDefaultTheme } from 'utils/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Tab } from 'components/Tabs';
import { getIsAppError, getIsAppFetching } from 'store/app/selectors';
import { setAppError } from 'store/app';
import useNotifications from 'hooks/useNotifications';
import { loginValidation } from './validation';
import Auth from './components/Auth';
import Registration from './components/Registration';
import { StyledRow, StyledTabs } from './styles';
import { AuthAction, RegistrationAction } from './store/actions';

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
  const error = useSelector(getIsAppError);
  const { createNotification } = useNotifications();

  const formSubmitHandler = useCallback((values) => {
    if (error) dispatch(setAppError(null));
    dispatch(
      values.variant === 'registration' ? 
        RegistrationAction(values) : 
        AuthAction(values)
    );
  }, [error]);

  useEffect(() => {
    if (error) {
      createNotification({
        type: 'error',
        message: translation.t(`errors.${error}`),
      });
      dispatch(setAppError(null));
    } 
  }, [error]);

  return (
    <Container mt={80}>
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
          onSubmit={formSubmitHandler}
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