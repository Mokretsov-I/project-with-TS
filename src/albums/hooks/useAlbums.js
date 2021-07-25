import { useQuery } from "react-query";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const useAlbums = (id) => {
	const { isLoading, isError, data, error } = useQuery("albums", () => {
		const url = `${baseUrl}/users/${id}/albums`;
		return fetch(url).then((res) => res.json());
	});

	return { isLoading, isError, data, error };
};
