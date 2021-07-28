import { useQueryWrapper, request } from "api";

export const useUsers = () => {
  const {
    isLoading,
    isError,
    data: users,
    error,
  } = useQueryWrapper("users", request, `/users`);
  return { isLoading, isError, users, error };
};
