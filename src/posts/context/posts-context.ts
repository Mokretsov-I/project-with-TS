import { createContext, useContext } from "react";

export type PostsType = {
  id: number
  userId: number
  title: string
  body: string
}

export type ContextType = {
  isLoading: boolean
  isError: boolean
  posts: Array<PostsType> | unknown
  error?: any
}

export const PostsContext = createContext<ContextType>({} as ContextType);
export const usePostsContext = () => useContext(PostsContext);
