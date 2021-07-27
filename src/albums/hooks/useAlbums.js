import { useQueryWrapper } from "api";

export const useAlbums = (id) => {
	const { isLoading, isError, data: albums, error } = useQueryWrapper("albums", `/users/${id}/albums`);
	return { isLoading, isError, albums, error };
};
