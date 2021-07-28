import { request, useQueryWrapper } from "api";
import { ContextType } from "../context/todos-context";

export const useTodos = (id: number) => {
  const {
    isLoading,
    isError,
    data: todos,
    error,
  }: ContextType = useQueryWrapper("todos", request, `/users/${id}/todos`);
  return { isLoading, isError, todos, error };
};
