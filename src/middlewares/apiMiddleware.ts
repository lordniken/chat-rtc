import { Middleware } from 'redux';
import { setAppError, setAppFetching } from 'store/app';
import { ApiRequest } from 'store/app/actions';
import { IApiRequest } from 'store/app/types';

const ApiMiddleware: Middleware = ({ dispatch }) => next => async action => {
  next(action);
  if (action.type !== ApiRequest.type) return;

  const { url, method, body, successAction } = action.payload as IApiRequest;
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

    if (response.status === 200 || response.status === 201) {
      dispatch(successAction(json.payload));
    } else {
      dispatch(setAppError(json.error));
    }
  } catch (error) {
    dispatch(setAppError('FETCH_FAILED'));
  }

  dispatch(setAppFetching(false));
};

export default ApiMiddleware;