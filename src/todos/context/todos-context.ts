import { createContext, useContext } from "react";


export type ContextType = {
  isLoading?: boolean
  isError?: boolean
  [data: string]: any
  error?: any
}

export const TodosContext = createContext<ContextType>({});
export const useTodosContext = () => useContext(TodosContext);
