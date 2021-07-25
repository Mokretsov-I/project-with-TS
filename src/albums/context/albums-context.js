import { createContext, useContext } from "react";

export const AlbumsContext = createContext();
export const useAlbumsContext = () => useContext(AlbumsContext);
