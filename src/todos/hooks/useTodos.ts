import { request, useQueryWrapper } from "api";

export const useTodos = (id: number) => {
  const {
    isLoading,
    isError,
    data: todos,
    error,
  } = useQueryWrapper("todos", request, `/users/${id}/todos`);
  return { isLoading, isError, todos, error };
};
