import React from "react";

import { usePostsContext } from "../../context/posts-context";
import { Loader } from "components/Loader";

import { ContextType } from '../../context/posts-context'

import "./PostsList.scss";

export const PostsList: React.FC = () => {
	const { posts, isLoading }: ContextType = usePostsContext();

	if (isLoading) {
		<Loader />;
	}

	return (
		<div className="posts">
			<h2>Posts:</h2>
			{posts?.map((post: any) => (
				<div className="posts__item" key={post.id}>
					<h3 className="posts__title">{post.title}</h3>
					<p className="posts__body">{post.body}</p>
				</div>
			))}
		</div>
	);
};
