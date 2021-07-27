import { request, useQueryWrapper } from "api";

export const usePosts = (id) => {
  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQueryWrapper("posts", request, `/users/${id}/posts`);
  return { isLoading, isError, posts, error };
};
