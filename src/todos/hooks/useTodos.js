import { useQuery } from "react-query";

export const useTodos = (id) => {
	const { isLoading, isError, data: todos, error } = useQuery("todos", request(id));
	return { isLoading, isError, todos, error };
};

const request = (id) => () => {
	const baseUrl = process.env.REACT_APP_API_URL || "https://jsonplaceholder.typicode.com";
	const url = `${baseUrl}/users/${id}/todos`;
	return fetch(url).then((res) => res.json());
};
