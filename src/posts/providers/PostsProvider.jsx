import React from "react";

import { usePosts } from "../hooks/usePosts";
import { PostsContext } from "../context/posts-context";

export const PostsProvider = ({ userId, children }) => {
	const context = usePosts(userId);

	return <PostsContext.Provider value={context}>{children}</PostsContext.Provider>;
};
