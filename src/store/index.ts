import { connect } from 'react-redux';
import { RouterState } from 'connected-react-router';
import middlewares, { history } from './middlewares';
import reducers from './reducers';
import { IAppState } from './app';
import { IUserState } from './user';
import { IChatState } from './chat';

export interface ApplicationState {
  router: RouterState;
  app: IAppState;
  user: IUserState;
  chat: IChatState;
}

export { history, connect, reducers, middlewares };
