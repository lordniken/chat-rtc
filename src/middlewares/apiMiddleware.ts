import { Middleware } from 'redux';
import { setAppError, setAppFetching } from 'store/app';
import { ApiRequest } from 'store/app/actions';
import { IApiRequest } from 'store/app/types';

const ApiMiddleware: Middleware = ({ dispatch }) => next => async action => {
  next(action);

  if (action.type !== ApiRequest.type) return;

  const { url, method, body } = action.payload as IApiRequest;

  dispatch(setAppFetching(true));
  
  try {
    const response = await fetch(`${process.env.HOST}/${url}`, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const json = await response.json();

    if (response.status === 200) {
      console.log('ok');
    } else {
      dispatch(setAppError(json.errors));
    }
  } catch (error) {
    dispatch(setAppError(error));
  }

  dispatch(setAppFetching(false));
};

export default ApiMiddleware;