import { request, useQueryWrapper } from "api";
import { PostsType } from "posts/context/posts-context";

const fetchPosts = (userId: string): Promise<PostsType[]> => {
	return request(`/users/${userId}/posts`);
};

export const usePosts = (id: number) => {
	const { isLoading, isError, data: posts, error } = useQueryWrapper("posts", fetchPosts, id);
	return { isLoading, isError, posts, error };
};
