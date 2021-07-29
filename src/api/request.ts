const hostName = process.env.REACT_APP_API_URL;

export function request <Data, IN, EP=string> (endpoint: EP, init?: IN): Promise<Data> {
  const data = fetch(`${hostName}${endpoint}`, init);
  const response = data.then((res) => res.json());
  return response;
};