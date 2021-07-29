import { request, useQueryWrapper } from "api";
import { TodosType } from "todos/context/todos-context";

const fetchTodos = (userId: string): Promise<TodosType[]> => {
	return request(`/users/${userId}/todos`);
};

export const useTodos = (id: number) => {
	const { isLoading, isError, data: todos, error } = useQueryWrapper("todos", fetchTodos, id);
	return { isLoading, isError, todos, error };
};
