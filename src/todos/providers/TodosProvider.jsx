import React from "react";

import { useTodos } from "../hooks/useTodos";
import { TodosContext } from "../context/todos-context";

export const TodosProvider = ({ children }) => {
  const id = children.props.userId;
  const context = useTodos(id);

  return (
    <TodosContext.Provider value={context}>{children}</TodosContext.Provider>
  );
};
