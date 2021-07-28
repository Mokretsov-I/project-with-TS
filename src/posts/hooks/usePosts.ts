import { request, useQueryWrapper } from "api";
import { ContextType } from "../context/posts-context";

export const usePosts = (id: number) => {
  const {
    isLoading,
    isError,
    data: posts,
    error,
  } : ContextType = useQueryWrapper("posts", request, `/users/${id}/posts`);
  return { isLoading, isError, posts, error };
};
