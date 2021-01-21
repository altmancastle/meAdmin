import { FC } from "react";

export interface MeRoute {
  key: string;
  path?: string;
  title?: string;
  exact?: boolean;
  redirect?: string;
  component?: FC<{}>;
  children?: MeRoute[];
}

export const ROUTES: MeRoute[] = [];
