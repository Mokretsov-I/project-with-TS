import React from "react";

import { usePosts } from "../hooks/usePosts";
import { PostsContext, ContextType } from "../context/posts-context";

type Props = {
  userId: number;
};

export const PostsProvider: React.FC<Props> = ({ userId, children }) => {
  const context: ContextType = usePosts(userId);
  return (
    <PostsContext.Provider value={context}>{children}</PostsContext.Provider>
  );
};
