import { useQuery } from "react-query";

export const useQueryWrapper = (hash, request, input) => {
  const requestWrapper = ({ queryKey }) => {
    return request(queryKey[1]);
  };

  const queryInfo = useQuery([hash, input], requestWrapper);
  return queryInfo;
};
