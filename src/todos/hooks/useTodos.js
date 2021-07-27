import { request, useQueryWrapper } from "api";

export const useTodos = (id) => {
  const {
    isLoading,
    isError,
    data: todos,
    error,
  } = useQueryWrapper("todos", `/users/${id}/todos`, request);
  return { isLoading, isError, todos, error };
};
