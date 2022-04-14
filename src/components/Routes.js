import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Topics from "../views/Topics";
import Results from "../views/Results";

const Routes = () => {
  return (
    <main className="main-content">
      <Switch>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default Routes;