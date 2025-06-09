import { Route, Switch } from "wouter";
import IndexPage from "./pages/IndexPage";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />

      <div className="container mx-auto my-8">
        <Switch>
          <Route path="/" component={IndexPage} />
        </Switch>
      </div>
    </>
  );
}
