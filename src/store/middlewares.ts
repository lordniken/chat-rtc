import { applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import ApiMiddleware from 'middlewares/apiMiddleware';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const router: Middleware = routerMiddleware(history);
export const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(router, sagaMiddleware, ApiMiddleware);

export default middlewares;
