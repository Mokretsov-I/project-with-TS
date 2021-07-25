import { useQuery } from "react-query";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const usePosts = (id) => {
	const { isLoading, isError, data, error } = useQuery("posts", () => {
		const url = `${baseUrl}/users/${id}/posts`;
		return fetch(url).then((res) => res.json());
	});

	return { isLoading, isError, data, error };
};
