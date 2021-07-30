import { useQueryWrapper } from "api";

import { PostsService } from "posts/services";
import { useMemo } from "react";

export const usePosts = (id: number) => {
	const postsService = useMemo(() => new PostsService(), []);
	const { isLoading, isError, data: posts, error } = useQueryWrapper("posts", postsService.getPosts, id);
	return { isLoading, isError, posts, error };
};
