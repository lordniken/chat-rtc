import { connect } from 'react-redux';
import { RouterState } from 'connected-react-router';
import middlewares, { history } from './middlewares';
import reducers from './reducers';
import { IAppState } from './app';
import { IUserState } from './user';

export interface ApplicationState {
  router: RouterState;
  app: IAppState;
  user: IUserState;
}

export { history, connect, reducers, middlewares };
