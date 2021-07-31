import React from "react";

import { AlbumsProvider } from "../providers/AlbumsProvider";
import { AlbumsList } from "../components/AlbumsList";

type Props = {
  userId: number;
};

export const Albums: React.FC<Props> = (props) => (
  <AlbumsProvider userId={props.userId}>
    <AlbumsList {...props} />
  </AlbumsProvider>
);
