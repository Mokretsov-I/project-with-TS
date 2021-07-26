import React from "react";

import { AlbumsProvider } from "../providers/AlbumsProvider";
import { AlbumsList } from "../components/AlbumsList";

export const AlbumList = (props) => (
	<AlbumsProvider userId={props.userId}>
		<AlbumsList {...props} />
	</AlbumsProvider>
);
