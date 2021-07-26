import React from "react";

import { TodosProvider } from "../providers/TodosProvider";
import { TodosList } from "../components/TodosList";

export const TodoList = (props) => (
	<TodosProvider userId={props.userId}>
		<TodosList {...props} />
	</TodosProvider>
);
