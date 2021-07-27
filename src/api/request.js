const hostName = process.env.REACT_APP_API_URL;

export const request = (endpoint, init = null) => {
  const data = fetch(`${hostName}${endpoint}`, init);
  const response = data.then((res) => res.json());
  return response;
};
