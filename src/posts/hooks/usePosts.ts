import { request, useQueryWrapper } from "api";

import { Posts } from "posts/models";

const fetchPosts = (userId: string): Promise<Posts[]> => {
	return request(`/users/${userId}/posts`);
};

export const usePosts = (id: number) => {
	const { isLoading, isError, data: posts, error } = useQueryWrapper("posts", fetchPosts, id);
	return { isLoading, isError, posts, error };
};
