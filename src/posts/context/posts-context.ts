import { createContext, useContext } from "react";

import { Posts } from "posts/models";

export type ContextType = {
	isLoading: boolean;
	isError: boolean;
	posts?: Array<Posts>;
	error?: any;
};

export const PostsContext = createContext<ContextType>({} as ContextType);
export const usePostsContext = () => useContext(PostsContext);
