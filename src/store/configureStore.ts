import { Store, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { sagaMiddleware } from 'store/middlewares';
import { ApplicationState, reducers, middlewares } from 'store';
import { rootSaga } from './sagas';

function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
    name: 'DBO',
  });

  const store = createStore(
    reducers(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)), middlewares),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export { configureStore };
