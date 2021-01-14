import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import { ApplicationState } from 'store';
import appReducer from './app';

const combinedReducers = (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  app: appReducer,
});

export default combinedReducers;
