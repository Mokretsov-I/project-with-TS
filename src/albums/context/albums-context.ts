import { createContext, useContext } from "react";

export type AlbumsType = {
  id: number;
  userId: number;
  title: string;
};

type ContextType = {
  isLoading: boolean;
  isError: boolean;
  albums: Array<AlbumsType>;
  error: any;
};

export const AlbumsContext = createContext<ContextType>({} as ContextType);
export const useAlbumsContext = () => useContext(AlbumsContext);
