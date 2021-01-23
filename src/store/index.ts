import { connect } from 'react-redux';
import { RouterState } from 'connected-react-router';
import { ILoginState } from 'pages/Login/store/slices';
import middlewares, { history } from './middlewares';
import reducers from './reducers';
import { IAppState } from './app';

export interface ApplicationState {
  router: RouterState;
  app: IAppState;
  login: ILoginState
}

export { history, connect, reducers, middlewares };
