import { createContext, useContext } from "react";

export type ContextType = {
  isLoading?: boolean
  isError?: boolean
  [data: string]: any
  error?: any
}

export const UsersContext = createContext<ContextType>({});
export const useUsersContext = () => useContext(UsersContext);
