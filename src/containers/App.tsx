import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'global/theme';
import i18n from 'utils/i18n';
import { I18nextProvider } from 'react-i18next';
import SuspenseComponent from 'pages/Suspense';
import AdaptiveProvider from 'providers/AdaptiveProvider';
import { renderRoutes } from 'utils/router';
import routes from 'global/routes';
import { createBrowserHistory, History } from 'history';
import { configureStore } from 'store/configureStore';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const renderedRoutes = renderRoutes(routes);
const history: History = createBrowserHistory();
// @ts-ignore
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);   

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AdaptiveProvider>
        <ThemeProvider theme={lightTheme}>
          <Suspense fallback={<SuspenseComponent />}>
            <I18nextProvider i18n={i18n}>
              {renderedRoutes}
            </I18nextProvider>
          </Suspense>
        </ThemeProvider>
      </AdaptiveProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;