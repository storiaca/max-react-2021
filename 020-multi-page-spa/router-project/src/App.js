import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/qoutes"></Route>
      <Route path="/qoutes/:qouteId"></Route>
      <Route path="/new-quote"></Route>
    </Switch>
  );
}

export default App;
