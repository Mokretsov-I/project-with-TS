import React from "react";

import { UsersProvider } from "../providers/UsersProvider";
import { UsersListPage } from "../pages/UsersListPage";

export const UserList: React.FC = () => (
  <UsersProvider>
    <UsersListPage />
  </UsersProvider>
);
