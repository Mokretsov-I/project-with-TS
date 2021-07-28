import React from "react";

import { TodosProvider } from "../providers/TodosProvider";
import { TodosList } from "../components/TodosList";

type Props = {
  userId: number;
};

export const Todos: React.FC<Props> = (props) => (
  <TodosProvider userId={props.userId}>
    <TodosList {...props} />
  </TodosProvider>
);
