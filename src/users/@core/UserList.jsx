import React from "react";

import { UsersProvider } from "../providers/UsersProvider";
import { UsersListPage } from "../pages/UsersListPage";

export const UserList = () => (
  <UsersProvider>
    <UsersListPage />
  </UsersProvider>
);
