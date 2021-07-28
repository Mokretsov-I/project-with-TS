import { createContext, useContext } from "react";

export type ContextType = {
  isLoading?: boolean
  isError?: boolean
  [data: string]: any
  error?: any
}

export const AlbumsContext = createContext<ContextType>({});
export const useAlbumsContext = () => useContext(AlbumsContext);
