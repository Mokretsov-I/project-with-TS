import { useMemo } from "react";

import { AlbumsService } from "albums/services";
import { useQueryWrapper } from "api";

export const useAlbums = (id: number) => {
	const albumsService = useMemo(() => new AlbumsService(), []);
	const { isLoading, isError, data: albums, error } = useQueryWrapper("albums", albumsService.getAlbums, id);
	return { isLoading, isError, albums, error };
};
