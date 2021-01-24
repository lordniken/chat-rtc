import React from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'store/user/selectors';
import RedirectRoute from './RedirectRoute';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute = (props: any) => {
  const isAuth = useSelector(getIsAuth);

  return <RedirectRoute routeProps={props} redirect="/" condition={isAuth} />;
};

export default PrivateRoute;
