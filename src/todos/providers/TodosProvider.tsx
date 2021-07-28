import React from "react";

import { useTodos } from "../hooks/useTodos";
import { TodosContext, ContextType } from "../context/todos-context";

type Props = {
  userId: number;
};

export const TodosProvider: React.FC<Props> = ({ userId, children }) => {
  const context: ContextType = useTodos(userId);
  return (
    <TodosContext.Provider value={context}>{children}</TodosContext.Provider>
  );
};
