import { Route, Switch } from "react-router-dom";

import { ROUTES } from "../const/routes";
import { UserList, UserDetail } from "users";

export const AppRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.UserList}>
      <UserList />
    </Route>
    <Route path={ROUTES.UserDetail}>
      <UserDetail />
    </Route>
  </Switch>
);
