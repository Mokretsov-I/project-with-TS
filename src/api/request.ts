const hostName = process.env.REACT_APP_API_URL;

export const request = (endpoint: string, init?: any) => {
  const data = fetch(`${hostName}${endpoint}`, init);
  const response = data.then((res) => res.json());
  return response;
};
