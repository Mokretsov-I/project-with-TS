import { Albums } from "albums/models";
import { request, useQueryWrapper } from "api";

const fetchAlbums = (userId: string): Promise<Albums[]> => {
	return request(`/users/${userId}/albums`);
};

export const useAlbums = (id: number) => {
	const { isLoading, isError, data: albums, error } = useQueryWrapper("albums", fetchAlbums, id);
	return { isLoading, isError, albums, error };
};
