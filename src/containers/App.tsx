import React from 'react';
import LoginPage from 'pages/Login';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'global/theme';

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <LoginPage />
  </ThemeProvider>
);

export default App;