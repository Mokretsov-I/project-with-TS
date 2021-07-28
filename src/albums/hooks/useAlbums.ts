import { request, useQueryWrapper } from "api";

export const useAlbums = (id: number) => {
  const {
    isLoading,
    isError,
    data: albums,
    error,
  } = useQueryWrapper("albums", request, `/users/${id}/albums`);
  return { isLoading, isError, albums, error };
};
