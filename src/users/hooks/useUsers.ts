import { useQueryWrapper, request } from 'api';

import { ContextType } from '../context/users-context'

export const useUsers = () => {
	const {
    isLoading,
    isError,
    data: users,
    error,
  }: ContextType = useQueryWrapper("users", request, `/users`);
	return { isLoading, isError, users, error };
};
