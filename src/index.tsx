import { defaultTheme, ThemeProvider, Toastr } from "@sparrowengg/twigs-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

// import defaultThemeTwigs from '../twigs.config.ts'

const rootEl = document.getElementById("root");
const queryClient = new QueryClient();

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<ThemeProvider
						theme={{
							...defaultTheme,
							fonts: {
								body: "'DM sans', sans-serif",
								heading: "'DM sans', sans-serif",
							},
						}}
					>
						<Toastr duration={10000} />
						<App />
					</ThemeProvider>
				</Provider>
			</QueryClientProvider>
		</React.StrictMode>,
	);
}
