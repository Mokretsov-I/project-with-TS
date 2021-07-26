import React from "react";

import { useTodos } from "../hooks/useTodos";
import { TodosContext } from "../context/todos-context";

export const TodosProvider = ({ userId, children }) => {
	const context = useTodos(userId);

	return <TodosContext.Provider value={context}>{children}</TodosContext.Provider>;
};
