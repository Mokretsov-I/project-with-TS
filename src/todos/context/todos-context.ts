import { createContext, useContext } from "react";
import { Todos } from "../models";

type ContextType = {
	isLoading: boolean;
	isError: boolean;
	todos?: Array<Todos>;
	error: any;
};

export const TodosContext = createContext<ContextType>({} as ContextType);
export const useTodosContext = () => useContext(TodosContext);
