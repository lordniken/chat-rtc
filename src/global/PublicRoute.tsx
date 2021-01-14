import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getIsAppLoaded } from 'store/app/selectors';
import { getIsAuth } from 'store/user/selectors';
import RedirectRoute from './RedirectRoute';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PublicRoute = (props: any) => {
  const isAuth = useSelector(getIsAuth);
  const isLoaded = useSelector(getIsAppLoaded);
  const urlPath = useLocation().pathname;

  if (!isLoaded) return null;

  return <RedirectRoute routeProps={props} redirect={urlPath === '/' ? '/dashboard' : urlPath} condition={!isAuth} />;
};

export default PublicRoute;
