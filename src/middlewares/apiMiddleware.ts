import { Middleware } from 'redux';
import { setAppError, setAppFetching } from 'store/app';
import { ApiRequest, ApiResponse } from 'store/app/actions';
import { IApiRequest } from 'store/app/types';
import { getToken } from 'utils/selectors';

const ApiMiddleware: Middleware = ({ dispatch }) => next => async action => {
  next(action);
  if (action.type !== ApiRequest.type) return;

  const { url, method, body, headers } = action.payload as IApiRequest;
  dispatch(setAppFetching(true));

  let tokenHeader = {};
  
  const token = getToken();
  if (token) tokenHeader = { 'Authorization': `Bearer ${token}` };
 
  try {
    const response = await fetch(`${process.env.HOST}/${url}`, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
        ...tokenHeader,
        ...headers
      }
    });
    const json = await response.json();

    dispatch(ApiResponse({ ...json, code: response.status }));

  } catch (error) {
    dispatch(setAppError('FETCH_FAILED'));
  }

  dispatch(setAppFetching(false));
};

export default ApiMiddleware;