import React, { ReactNode } from "react";

import { useAlbums } from "../hooks/useAlbums";
import { AlbumsContext, ContextType } from "../context/albums-context";

type AlbumsProviderType = {
	userId: number
	children: ReactNode
}

export const AlbumsProvider: React.FC<AlbumsProviderType> = ({ userId, children }) => {
	const context: ContextType = useAlbums(userId);
	return <AlbumsContext.Provider value={context}>{children}</AlbumsContext.Provider>;
};
