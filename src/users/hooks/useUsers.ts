import { useQueryWrapper, request } from "api";
import { UserType } from "users/context/users-context";

const fetchAlbums = (): Promise<UserType[]> => {
	return request(`/users`);
};

export const useUsers = () => {
	const { isLoading, isError, data: users, error } = useQueryWrapper("users", fetchAlbums, `/users`);
	return { isLoading, isError, users, error };
};
