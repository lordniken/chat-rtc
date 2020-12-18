import React, { useCallback, useEffect } from 'react';
import { Container, Row } from 'components/Grid';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';

export const LoginPage:React.FC = () => {
  const translation = useTranslation(['pages/login']);
  const { t, i18n } = useTranslation(['common']);
  
  const switchLocale = useCallback(() => {
    if (i18n.language === 'ru') {
      i18n.changeLanguage('en');
    } else { 
      i18n.changeLanguage('ru');
    }
  }, [i18n]);

  return (
    <Container>
      <Row justify="center">
        <Typography component="h1">
          {translation.t('title')}
        </Typography>
        <a href="#test" onClick={switchLocale}>{t('changeLocale')}</a>
      </Row>
    </Container>
  );
};
