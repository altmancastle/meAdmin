import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../../pages/home";

const MeRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default MeRoutes;
