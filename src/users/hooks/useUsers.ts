import { useQueryWrapper, request } from "api";
import { Users } from "users/modals";

const fetchAlbums = (): Promise<Users[]> => {
	return request(`/users`);
};

export const useUsers = () => {
	const { isLoading, isError, data: users, error } = useQueryWrapper("users", fetchAlbums, `/users`);
	return { isLoading, isError, users, error };
};
