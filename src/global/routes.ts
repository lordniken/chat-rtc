import { lazy } from 'react';

const Login = lazy(() => import('pages/Login'));
const Chat = lazy(() => import('pages/Chat'));

const routes: TRouteItem[] = [
  {
    path: '/',
    exact: true,
    component: Login,
    private: false,
    defaultRoute: true,
  },
  {
    path: '/chat',
    exact: true,
    component: Chat,
    private: true,
  }
];

export default routes;
