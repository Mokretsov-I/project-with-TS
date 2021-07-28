import React, { ReactNode } from "react";

import { useUsers } from "../hooks/useUsers";
import { UsersContext } from "../context/users-context";
import { ContextType } from '../context/users-context'

type UsersProviderType = {
  children: ReactNode
}

export const UsersProvider: React.FC<UsersProviderType> = ({ children }) => {
  const context: ContextType = useUsers();
  return (
    <UsersContext.Provider value={context}>{children}</UsersContext.Provider>
  );
};
