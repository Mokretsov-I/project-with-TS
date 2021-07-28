import React from "react";

import { useAlbums } from "../hooks/useAlbums";
import { AlbumsContext } from "../context/albums-context";

type Props = {
  userId: number;
};

export const AlbumsProvider: React.FC<Props> = ({ userId, children }) => {
  const context = useAlbums(userId);
  return (
    <AlbumsContext.Provider value={context}>{children}</AlbumsContext.Provider>
  );
};
