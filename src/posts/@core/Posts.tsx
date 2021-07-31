import React from "react";

import { PostsProvider } from "../providers/PostsProvider";
import { PostsList } from "../components/PostsList";

type Props = {
  userId: number;
};

export const Posts: React.FC<Props> = (props) => (
  <PostsProvider userId={props.userId}>
    <PostsList {...props} />
  </PostsProvider>
);
