import { createContext, useContext } from "react";

export const PostsContext = createContext();
export const usePostsContext = () => useContext(PostsContext);
