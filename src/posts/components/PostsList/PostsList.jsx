import React from "react";

import { usePostsContext } from "posts/context/posts-context";
import { Loader } from "components/Loader";

import "./PostsList.scss";

export const PostsList = () => {
  const { data, isLoading } = usePostsContext();

  if (isLoading) {
    <Loader />;
  }

  return (
    <div className="posts">
      <h2>Posts:</h2>
      {data?.map((post) => (
        <div className="posts__item" key={post.id}>
          <h3 className="posts__title">{post.title}</h3>
          <p className="posts__body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};
