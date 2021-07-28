import { request, useQueryWrapper } from "api";
import { ContextType } from "../context/albums-context";

export const useAlbums = (id: number) => {
  const {
    isLoading,
    isError,
    data: albums,
    error,
  } : ContextType = useQueryWrapper("albums", request, `/users/${id}/albums`);
  return { isLoading, isError, albums, error };
};
