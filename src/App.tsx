import { Route, Switch } from "wouter";
import IndexPage from "./pages/IndexPage";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </>
  );
}
