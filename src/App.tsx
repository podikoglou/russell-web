import {
	RouterProvider,
	createHashHistory,
	createRouter,
} from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { z } from "zod";
import Header from "./components/Header";
import { EngineProvider } from "./context/EngineContext";
import IndexPage from "./pages/IndexPage";
import ResultPage from "./pages/ResultPage";

// Create the root route
const rootRoute = createRootRoute({
	component: () => (
		<EngineProvider>
			<Header />
			<div className="container mx-auto my-8">
				<Outlet />
			</div>
			<TanStackRouterDevtools />
		</EngineProvider>
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

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, resultRoute]);

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
