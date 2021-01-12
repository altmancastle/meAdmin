import { Switch, Route, Redirect } from "react-router-dom";

interface RouteProps {
  routes: any[];
}

const Routes = (props: RouteProps) => {
  const { routes } = props;

  return (
    <Switch>
      {routes[0] && routes[0].path ? (
        <Route exact path="/">
          <Redirect
            exact
            from="/"
            to={routes[0] && `/${routes[0].path.split("/")[1]}`}
          />
        </Route>
      ) : null}

      {routes.map((item) => {
        if (item.redirect) {
          return (
            <Redirect
              key={item.key}
              exact
              from={item.path}
              to={item.redirect}
            />
          );
        } else {
          return (
            <Route
              key={item.key}
              exact
              path={item.path}
              component={item.component}
            />
          );
        }
      })}
    </Switch>
  );
};

export default Routes;
