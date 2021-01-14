import React from 'react';
import { useLocation } from 'react-router-dom';
import RedirectRoute from './RedirectRoute';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PublicRoute = (props: any) => {
  const isAuth = true;
  const urlPath = useLocation().pathname;

  return <RedirectRoute routeProps={props} redirect={urlPath === '/' ? '/chat' : urlPath} condition={!isAuth} />;
};

export default PublicRoute;
