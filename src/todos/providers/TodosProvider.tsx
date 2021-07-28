import React, { ReactNode } from "react";

import { useTodos } from "../hooks/useTodos";
import { TodosContext, ContextType } from "../context/todos-context";

type TodosProviderType = {
	userId: number
	children: ReactNode
}

export const TodosProvider: React.FC<TodosProviderType> = ({ userId, children }) => {
	const context: ContextType = useTodos(userId);
	return <TodosContext.Provider value={context}>{children}</TodosContext.Provider>;
};
