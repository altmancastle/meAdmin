import { FC } from "react";

export interface PrivateRoute {
  key: string;
  path?: string;
  title?: string;
  exact?: boolean;
  redirect?: string;
  component?: FC<{}>;
  children?: PrivateRoute[];
}

export const ROUTES: PrivateRoute[] = [];
