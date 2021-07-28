import React from "react";

import { TodosProvider } from "../providers/TodosProvider";
import { TodosList } from "../components/TodosList";

type propsType = {
  userId: number
}

export const Todos: React.FC<propsType> = (props) => (
  <TodosProvider userId={props.userId}>
    <TodosList {...props} />
  </TodosProvider>
);
