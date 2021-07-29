import React from "react";

import { useTodos } from "../hooks/useTodos";
import { TodosContext } from "../context/todos-context";

type Props = {
  userId: number;
};

export const TodosProvider: React.FC<Props> = ({ userId, children }) => {
  const context = useTodos(userId);
  return (
    <TodosContext.Provider value={context}>{children}</TodosContext.Provider>
  );
};
