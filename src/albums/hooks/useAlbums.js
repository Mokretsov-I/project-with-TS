import { useQuery } from "react-query";

export const useAlbums = (id) => {
	const { isLoading, isError, data: albums, error } = useQuery("albums", request(id));
	return { isLoading, isError, albums, error };
};

const request = (id) => () => {
	const baseUrl = process.env.REACT_APP_API_URL || "https://jsonplaceholder.typicode.com";
	const url = `${baseUrl}/users/${id}/albums`;
	return fetch(url).then((res) => res.json());
};
