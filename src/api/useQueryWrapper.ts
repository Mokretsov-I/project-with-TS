import { useQuery } from "react-query";

type Request<Input, Data> = (input: Input) => Promise<Data>;

export const useQueryWrapper = <Input, Data>(hash: string, request: Request<Input, Data>, input: string | number) => {
	const requestWrapper = ({ queryKey }: any) => {
		return request(queryKey[1]);
	};

	const queryInfo = useQuery([hash, input], requestWrapper);
	return queryInfo;
};
