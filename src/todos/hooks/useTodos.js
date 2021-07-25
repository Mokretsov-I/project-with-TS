import { useQuery } from "react-query";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const useTodos = (id) => {
	const { isLoading, isError, data, error } = useQuery("todos", () => {
		const url = `${baseUrl}/users/${id}/todos`;
		return fetch(url).then((res) => res.json());
	});

	return { isLoading, isError, data, error };
};
