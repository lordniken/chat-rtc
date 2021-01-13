import React, { Suspense } from 'react';
import LoginPage from 'pages/Login';
import ChatPage from 'pages/Chat';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'global/theme';
import i18n from 'utils/i18n';
import { I18nextProvider } from 'react-i18next';
import SuspenseComponent from 'pages/Suspense';
import AdaptiveProvider from 'providers/AdaptiveProvider';

const App: React.FC = () => (
  <AdaptiveProvider>
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<SuspenseComponent />}>
        <I18nextProvider i18n={i18n}>
          <ChatPage />
        </I18nextProvider>
      </Suspense>
    </ThemeProvider>
  </AdaptiveProvider>
);

export default App;