import React from "react";

import { useAlbums } from "../hooks/useAlbums";
import { AlbumsContext } from "../context/albums-context";

export const AlbumsProvider = ({ children }) => {
  const id = children.props.userId;
  const context = useAlbums(id);

  return (
    <AlbumsContext.Provider value={context}>{children}</AlbumsContext.Provider>
  );
};
