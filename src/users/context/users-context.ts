import { createContext, useContext } from "react";

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type ContextType = {
  isLoading: boolean;
  isError: boolean;
  users: Array<UserType> | unknown;
  error: any;
};

export const UsersContext = createContext<ContextType>({} as ContextType);
export const useUsersContext = () => useContext(UsersContext);
