import React from "react";

import { useAlbums } from "../hooks/useAlbums";
import { AlbumsContext } from "../context/albums-context";

export const AlbumsProvider = ({ userId, children }) => {
	const context = useAlbums(userId);

	return <AlbumsContext.Provider value={context}>{children}</AlbumsContext.Provider>;
};
