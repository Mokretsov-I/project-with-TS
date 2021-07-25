import React from "react";

import { UserDetailPage } from "../pages/UserDetailPage";
import { UsersProvider } from "../providers/UsersProvider";

export const UserDetail = () => (
  <UsersProvider>
    <UserDetailPage />
  </UsersProvider>
);
