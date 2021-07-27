import { request, useQueryWrapper } from "api";

export const useAlbums = (id) => {
  const {
    isLoading,
    isError,
    data: albums,
    error,
  } = useQueryWrapper("albums", `/users/${id}/albums`, request);
  return { isLoading, isError, albums, error };
};
