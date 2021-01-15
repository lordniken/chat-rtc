import React from 'react';
import RedirectRoute from './RedirectRoute';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute = (props: any) => {
  const isAuth = !true;

  return <RedirectRoute routeProps={props} redirect="/" condition={isAuth} />;
};

export default PrivateRoute;
