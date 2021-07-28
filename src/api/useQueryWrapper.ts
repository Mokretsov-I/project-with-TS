import { useQuery } from "react-query";

export const useQueryWrapper = (hash: string, request: Function, input: string | number) => {
  const requestWrapper = ({ queryKey }: any) => {
    return request(queryKey[1]);
  };

  const queryInfo = useQuery([hash, input], requestWrapper);
  return queryInfo;
};
