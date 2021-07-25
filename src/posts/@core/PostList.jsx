import React from "react";

import { PostsProvider } from "../providers/PostsProvider";
import { PostsList } from "../components/PostsList";

export const PostList = (props) => (
  <PostsProvider>
    <PostsList {...props} />
  </PostsProvider>
);
