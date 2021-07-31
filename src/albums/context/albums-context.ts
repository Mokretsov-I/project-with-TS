import { createContext, useContext } from "react";
import { Albums } from "../models";

type ContextType = {
	isLoading: boolean;
	isError: boolean;
	albums?: Array<Albums>;
	error: any;
};

export const AlbumsContext = createContext<ContextType>({} as ContextType);
export const useAlbumsContext = () => useContext(AlbumsContext);
