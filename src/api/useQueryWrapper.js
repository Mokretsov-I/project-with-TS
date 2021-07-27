import { useQuery } from "react-query";

export const useQueryWrapper = (hash, input, request) => {
  const requestWraper = ({ queryKey }) => {
    return request(queryKey[1]);
  };

  const queryInfo = useQuery([hash, input], requestWraper);
  return queryInfo;
};
