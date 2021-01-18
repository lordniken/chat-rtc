import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from 'global/themes';
import i18n from 'utils/i18n';
import { I18nextProvider } from 'react-i18next';
import SuspenseComponent from 'containers/Suspense';
import AdaptiveProvider from 'providers/AdaptiveProvider';
import { renderRoutes } from 'utils/router';
import routes from 'global/routes';
import { useSelector } from 'react-redux';
import { getAppTheme } from 'store/app/selectors';
import GlobalStyles from './GlobalStyles';

const renderedRoutes = renderRoutes(routes);

const App: React.FC = () => {
  const currentTheme = useSelector(getAppTheme);
 
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Suspense fallback={<SuspenseComponent />}>
        <I18nextProvider i18n={i18n}>
          <AdaptiveProvider>
            <GlobalStyles />
            {renderedRoutes}
          </AdaptiveProvider>
        </I18nextProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;