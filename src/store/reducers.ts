import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import { ApplicationState } from 'store';
import loginReducer from 'pages/Login/store/slices';
import appReducer from './app';

const combinedReducers = (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  app: appReducer,
  login: loginReducer,
});

export default combinedReducers;
