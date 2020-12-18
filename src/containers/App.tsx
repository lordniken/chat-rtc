import React from 'react';
import LoginPage from 'pages/Login';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'global/theme';
import i18n from 'utils/i18n';
import { I18nextProvider } from 'react-i18next';

const App: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={lightTheme}>
      <LoginPage />
    </ThemeProvider>
  </I18nextProvider>
);

export default App;