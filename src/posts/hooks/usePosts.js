import { useQuery } from "react-query";

export const usePosts = (id) => {
	const { isLoading, isError, data: posts, error } = useQuery("posts", request(id));
	return { isLoading, isError, posts, error };
};

const request = (id) => () => {
	const baseUrl = process.env.REACT_APP_API_URL || "https://jsonplaceholder.typicode.com";
	const url = `${baseUrl}/users/${id}/posts`;
	return fetch(url).then((res) => res.json());
};
