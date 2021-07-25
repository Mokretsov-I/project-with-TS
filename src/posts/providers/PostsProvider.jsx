import React from "react";

import { usePosts } from "../hooks/usePosts";
import { PostsContext } from "../context/posts-context";

export const PostsProvider = ({ children }) => {
  const id = children.props.userId;
  const context = usePosts(id);

  return (
    <PostsContext.Provider value={context}>{children}</PostsContext.Provider>
  );
};
