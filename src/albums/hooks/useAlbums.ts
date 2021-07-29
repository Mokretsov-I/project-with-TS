import { AlbumsType } from "albums/context/albums-context";
import { request, useQueryWrapper } from "api";

const fetchAlbums = (userId: string): Promise<AlbumsType[]> => {
	return request(`/users/${userId}/albums`);
};

export const useAlbums = (id: number) => {
	const { isLoading, isError, data: albums, error } = useQueryWrapper("albums", fetchAlbums, id);
	return { isLoading, isError, albums, error };
};
