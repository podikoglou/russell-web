import { Route, Router, Switch } from "wouter";
import Header from "./components/Header";
import { EngineProvider } from "./context/EngineContext";
import IndexPage from "./pages/IndexPage";
import ResultPage from "./pages/ResultPage";

export default function App() {
	return (
		<EngineProvider>
			<Header />

			<div className="container mx-auto my-8">
				<Router base="/russell-web">
					<Switch>
						<Route path="/" component={IndexPage} />
						<Route path="/p" component={ResultPage} />
					</Switch>
				</Router>
			</div>
		</EngineProvider>
	);
}
