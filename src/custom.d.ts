/* eslint-disable @typescript-eslint/no-explicit-any */

declare type TRouteItem = {
  path: string;
  exact?: boolean;
  private?: boolean;
  component: React.ComponentType;
  defaultRoute?: boolean;
};

declare module '*.svg' {
  const content: any;
  export default content;
}

declare type TAppTheme = 'light' | 'dark';
