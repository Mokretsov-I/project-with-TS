import { QueryClient, QueryClientProvider } from "react-query";

import { AppRoutes } from "./route";

import "./App.scss";

function App() {
	const queryClient = new QueryClient();
	return (
		<div className="app">
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
			</QueryClientProvider>
		</div>
	);
}

export default App;
