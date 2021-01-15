import Login from 'pages/Login';
import Chat from 'pages/Chat';

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
    private: false,
  }
];

export default routes;
