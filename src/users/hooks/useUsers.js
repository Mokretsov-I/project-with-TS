import { useQuery } from "react-query";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const useUsers = () => {
	const { isLoading, isError, data, error } = useQuery("users", () => {
		const url = `${baseUrl}/users`;
		return fetch(url).then((res) => res.json());
	});

	return { isLoading, isError, data, error };
};
