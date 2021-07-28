import { createContext, useContext } from "react";

export type TodosType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export type ContextType = {
  isLoading: boolean
  isError: boolean
  todos: Array<TodosType>
  error: any
}

export const TodosContext = createContext<ContextType>({} as ContextType);
export const useTodosContext = () => useContext(TodosContext);
