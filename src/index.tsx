import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'global/theme';
import App from 'containers/App';
import 'assets/styles/main.scss';

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>, document.getElementById('root')
);
