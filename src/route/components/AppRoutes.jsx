import { Route, Switch } from "react-router-dom";

import { ROUTES } from "../const/routes";
import { UserList, UserDetail } from "users";

export const AppRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.UserList} component={UserList} />
    <Route path={ROUTES.UserDetail} component={UserDetail} />
  </Switch>
);
