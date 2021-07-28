import React from "react";

import { useAlbumsContext } from "../../context/albums-context";
import { Loader } from "components/Loader";

import { ContextType } from '../../context/albums-context'

import "./AlbumsList.scss";

export const AlbumsList: React.FC = () => {
	const { albums, isLoading }: ContextType = useAlbumsContext();
	if (isLoading) {
		<Loader />;
	}

	return (
		<div className="albums">
			<h2>Albums:</h2>
			<ol>
				{albums?.map((album: any) => (
					<li className="album__item" key={album.id}>
						<p className="album__title">{album.title}</p>
					</li>
				))}
			</ol>
		</div>
	);
};
