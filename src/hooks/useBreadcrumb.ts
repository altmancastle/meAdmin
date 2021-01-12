import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { PrivateRoute } from "../config/router.config";

export const useBreadcrumb = (route: PrivateRoute[]) => {
  const { pathname } = useLocation();

  const breadcrumb = pathname.split("/").filter((item: string) => item !== "");

  const routes = [
    {
      path: "/",
      breadcrumbName: "首页",
    },
  ];

  return useMemo(() => {
    breadcrumb.forEach((item: string) => {
      route.forEach((breadcrumb) => {
        if (breadcrumb.title && item === breadcrumb.key) {
          routes.push({
            path: `/${item}`,
            breadcrumbName: breadcrumb.title,
          });
        }
      });
    });
    return routes;
  }, [breadcrumb, route, routes]);
};
