import { useMemo } from "react";

import { useQueryWrapper } from "api";
import { UsersService } from "users/services";

export const useUsers = () => {
	const usersService = useMemo(() => new UsersService(), []);
	const { isLoading, isError, data: users, error } = useQueryWrapper("users", usersService.getUsers, `/users`);
	return { isLoading, isError, users, error };
};
