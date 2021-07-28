import React from "react";

import { AlbumsProvider } from "../providers/AlbumsProvider";
import { AlbumsList } from "../components/AlbumsList";

type propsType = {
  userId: number
}

export const Albums: React.FC<propsType> = (props) => (
  <AlbumsProvider userId={props.userId}>
    <AlbumsList {...props} />
  </AlbumsProvider>
);
