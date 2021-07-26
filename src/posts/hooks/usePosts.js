import { useQuery } from "react-query";

import { request } from "api";

export const usePosts = (id) => {
  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery("posts", request(`/users/${id}/posts`));
  return { isLoading, isError, posts, error };
};
