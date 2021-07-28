import React from "react";

import { PostsProvider } from "../providers/PostsProvider";
import { PostsList } from "../components/PostsList";

type propsType = {
  userId: number
}

export const Posts: React.FC<propsType> = (props) => (
  <PostsProvider userId={props.userId}>
    <PostsList {...props} />
  </PostsProvider>
);
