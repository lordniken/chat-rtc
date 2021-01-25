import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import { ApplicationState } from 'store';
import appReducer from './app';
import userReducer from './user';


const combinedReducers = (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  app: appReducer,
  user: userReducer
});

export default combinedReducers;
