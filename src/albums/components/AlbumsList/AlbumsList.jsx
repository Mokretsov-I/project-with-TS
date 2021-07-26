import React from "react";

import { useAlbumsContext } from "albums/context/albums-context";
import { Loader } from "components/Loader";

import "./AlbumsList.scss";

export const AlbumsList = () => {
	const { albums, isLoading } = useAlbumsContext();

	if (isLoading) {
		<Loader />;
	}

	return (
		<div className="albums">
			<h2>Albums:</h2>
			<ol>
				{albums?.map((album) => (
					<li className="album__item" key={album.id}>
						<p className="album__title">{album.title}</p>
					</li>
				))}
			</ol>
		</div>
	);
};
