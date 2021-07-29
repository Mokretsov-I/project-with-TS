import React from "react";

import { usePostsContext, PostsType } from "posts/context/posts-context";
import { Loader } from "components/Loader";

import "./PostsList.scss";

export const PostsList: React.FC = () => {
  const { posts, isLoading } = usePostsContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="posts">
      <h2>Posts:</h2>
      {Array.isArray(posts) ? posts.map((post: PostsType) => (
        <div className="posts__item" key={post.id}>
          <h3 className="posts__title">{post.title}</h3>
          <p className="posts__body">{post.body}</p>
        </div>
      )) : "Posts is empty"}
    </div>
  );
};
