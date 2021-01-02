import React from 'react';
import { Col, Container, Row } from 'components/Grid';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { TextField } from 'components/TextField';
import { Formik } from 'formik';
import { Button } from 'components/Button';
import { StyledRow } from './styles';

export const LoginPage:React.FC = () => {
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
          initialValues={{ nickname: '' }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Col gutter>
                <TextField name="nickname" label="Ваше имя" required />
              </Col>
              <Col>
                <Button type="submit" fullWidth>{translation.t('sign_in')}</Button>
              </Col>
            </form>
          )}
        </Formik>
      </StyledRow>
    </Container>
  );
};
