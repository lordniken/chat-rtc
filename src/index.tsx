import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import { createBrowserHistory, History } from 'history';
import { configureStore } from 'store/configureStore';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const history: History = createBrowserHistory();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState = window && (window as any).INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);   

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
