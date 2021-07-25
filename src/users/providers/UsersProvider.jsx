import React from "react";

import { useUsers } from "../hooks/useUsers";
import { UsersContext } from "../context/users-context";

export const UsersProvider = ({ children }) => {
  const context = useUsers();

  return (
    <UsersContext.Provider value={context}>{children}</UsersContext.Provider>
  );
};
