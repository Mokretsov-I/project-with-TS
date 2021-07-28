import React, { ReactNode } from "react";

import { usePosts } from "../hooks/usePosts";
import { PostsContext, ContextType } from "../context/posts-context";

type PostsProviderType = {
	userId: number
	children: ReactNode
}

export const PostsProvider: React.FC<PostsProviderType> = ({ userId, children }) => {
	const context: ContextType = usePosts(userId);
	return <PostsContext.Provider value={context}>{children}</PostsContext.Provider>;
};
