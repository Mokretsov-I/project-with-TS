import { useQueryWrapper } from "api";

export const useTodos = (id) => {
	const { isLoading, isError, data: todos, error } = useQueryWrapper(["todos", id], `/users/${id}/todos`);
	return { isLoading, isError, todos, error };
};
