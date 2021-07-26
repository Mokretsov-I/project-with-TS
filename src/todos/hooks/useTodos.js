import { useQuery } from "react-query";

import { request } from "api";

export const useTodos = (id) => {
  const {
    isLoading,
    isError,
    data: todos,
    error,
  } = useQuery("todos", request(`/users/${id}/todos`));
  return { isLoading, isError, todos, error };
};
