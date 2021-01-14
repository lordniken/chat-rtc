declare type TRouteItem = {
  path: string;
  exact?: boolean;
  private?: boolean;
  component: React.ComponentType;
  defaultRoute?: boolean;
};
