import React from "react";

import { useAlbumsContext } from "albums/context/albums-context";
import { Loader } from "components/Loader";
import { Albums } from 'albums/models'

import "./AlbumsList.scss";

export const AlbumsList: React.FC = () => {
  const { albums, isLoading } = useAlbumsContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="albums">
      <h2>Albums:</h2>
      <ol>
        {Array.isArray(albums) ? albums.map((album: Albums) => (
          <li className="album__item" key={album.id}>
            <p className="album__title">{album.title}</p>
          </li>
        )) : "Albums is empty"}
      </ol>
    </div>
  );
};
