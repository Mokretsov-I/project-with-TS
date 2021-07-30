import { useMemo } from "react";

import { useQueryWrapper } from "api";
import { TodosService } from "todos/services";

export const useTodos = (id: number) => {
	const todosService = useMemo(() => new TodosService(), []);
	const { isLoading, isError, data: todos, error } = useQueryWrapper("todos", todosService.getTodos, id);
	return { isLoading, isError, todos, error };
};
