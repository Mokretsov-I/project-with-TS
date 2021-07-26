import React from "react";

import { TodosProvider } from "../providers/TodosProvider";
import { TodosList } from "../components/TodosList";

export const Todos = (props) => (
  <TodosProvider userId={props.userId}>
    <TodosList {...props} />
  </TodosProvider>
);
