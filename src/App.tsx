import { Route, Router, Switch } from "wouter";
import IndexPage from "./pages/IndexPage";
import Header from "./components/Header";
import ResultPage from "./pages/ResultPage";
import { EngineProvider } from "./context/EngineContext";

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
