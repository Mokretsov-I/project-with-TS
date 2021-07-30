import { createContext, useContext } from "react";
import { Users } from "../models";

export type ContextType = {
	isLoading: boolean;
	isError: boolean;
	users?: Array<Users>;
	error: any;
};

export const UsersContext = createContext<ContextType>({} as ContextType);
export const useUsersContext = () => useContext(UsersContext);
