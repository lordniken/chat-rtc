import { connect } from 'react-redux';
import { RouterState } from 'connected-react-router';
import middlewares, { history } from './middlewares';
import reducers from './reducers';
import { IAppState } from './app';

export interface ApplicationState {
  router: RouterState;
  app: IAppState;
}

export { history, connect, reducers, middlewares };
