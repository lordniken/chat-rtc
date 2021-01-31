import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getIsAuth } from 'store/user/selectors';
import RedirectRoute from './RedirectRoute';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PublicRoute = (props: any) => {
  const isAuth = useSelector(getIsAuth);
  const { pathname } = useLocation();
  const redirectedPath = pathname === '/' ? '/chat' : pathname;

  return <RedirectRoute routeProps={props} redirect={redirectedPath} condition={!isAuth} />;
};

export default PublicRoute;
