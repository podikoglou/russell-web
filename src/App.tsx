import { Route, Switch } from "wouter";
import IndexPage from "./pages/IndexPage";
import Header from "./components/Header";
import ResultPage from "./pages/ResultPage";
import { EngineProvider } from "./context/EngineContext";

export default function App() {
  return (
    <EngineProvider>
      <Header />

      <div className="container mx-auto my-8">
        <Switch>
          <Route path="/" component={IndexPage} />
          <Route path="/p" component={ResultPage} />
        </Switch>
      </div>
    </EngineProvider>
  );
}
