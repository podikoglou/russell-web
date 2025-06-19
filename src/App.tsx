import {
	RouterProvider,
	createHashHistory,
	createRouter,
} from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { z } from "zod";
import ThemeToggle from "./components/ThemeToggle";
import { EngineProvider } from "./context/EngineContext";
import { ThemeProvider } from "./context/ThemeContext";
import CheatsheetPage from "./pages/CheatsheetPage";
import IndexPage from "./pages/IndexPage";
import ResultPage from "./pages/ResultPage";

// Create the root route
const rootRoute = createRootRoute({
	component: () => (
		<ThemeProvider>
			<EngineProvider>
				<div className="min-h-screen bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-200 transition-colors">
					<ThemeToggle />
					<div className="container mx-auto py-8">
						<Outlet />
					</div>
				</div>
				<TanStackRouterDevtools />
			</EngineProvider>
		</ThemeProvider>
	),
});

// Create the index route
const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: IndexPage,
});

// Create the result page route with search params
const resultRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/p",
	component: ResultPage,
	validateSearch: z.object({
		input: z.string().optional(),
	}),
});

// Create the cheatsheet route
const cheatsheetRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/cheatsheet",
	component: CheatsheetPage,
});

// Create the route tree
const routeTree = rootRoute.addChildren([
	indexRoute,
	resultRoute,
	cheatsheetRoute,
]);

// Create a hash history instance
const hashHistory = createHashHistory();

// Create a new router instance
const router = createRouter({
	routeTree,
	history: hashHistory,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export default function App() {
	return <RouterProvider router={router} />;
}
