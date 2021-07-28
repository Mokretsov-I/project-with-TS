import { createContext, useContext } from "react";

export type ContextType = {
  isLoading?: boolean
  isError?: boolean
  [data: string]: any
  error?: any
}

export const PostsContext = createContext<ContextType>({});
export const usePostsContext = () => useContext(PostsContext);
