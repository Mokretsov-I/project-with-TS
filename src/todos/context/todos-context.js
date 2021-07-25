import { createContext, useContext } from "react";

export const TodosContext = createContext();
export const useTodosContext = () => useContext(TodosContext);
