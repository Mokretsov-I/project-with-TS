import { request, useQueryWrapper } from "api";
import { Todos } from "todos/modals";

const fetchTodos = (userId: string): Promise<Todos[]> => {
	return request(`/users/${userId}/todos`);
};

export const useTodos = (id: number) => {
	const { isLoading, isError, data: todos, error } = useQueryWrapper("todos", fetchTodos, id);
	return { isLoading, isError, todos, error };
};
