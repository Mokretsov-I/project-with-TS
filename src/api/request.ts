const hostName = process.env.REACT_APP_API_URL;

export function request(endpoint: string) {
	const data = fetch(`${hostName}${endpoint}`);
	const response = data.then((res) => res.json());
	return response;
}
