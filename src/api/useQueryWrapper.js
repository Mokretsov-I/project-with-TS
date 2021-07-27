import { useQuery } from "react-query";

const hostName = process.env.REACT_APP_API_URL;

const request = (endpoint, init = null) => {
	const data = fetch(`${hostName}${endpoint}`, init);
	const response = data.then((res) => res.json());
	return response;
};

export const useQueryWrapper = (key, endpoint) => {
	const requestWraper = () => {
		return request(endpoint);
	};

	const queryInfo = useQuery(key, requestWraper);
	return queryInfo;
};
