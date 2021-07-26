import { useQuery } from "react-query";

import { request } from "api";

export const useAlbums = (id) => {
  const {
    isLoading,
    isError,
    data: albums,
    error,
  } = useQuery("albums", request(`/users/${id}/albums`));
  return { isLoading, isError, albums, error };
};
