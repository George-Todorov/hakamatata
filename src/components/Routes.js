import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Topics from "../views/Topics";
import Results from "../views/Results";

import NVO4 from "../assets/pdf/NVO_IV_MAT_Model.pdf";
import NVO7 from "../assets/pdf/NVO_VII_MAT_Model.pdf";
import NaturalNumbers from "../assets/lessons/natural-numbers.png";
import Formula from "../assets/lessons/formulas.png";

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

        // 4. 
        <Route path="/natural-numbers">
          <img src={NaturalNumbers} alt="Natural Numbers" width="98%" height="460px" />
        </Route>
        <Route path="/nvo-math-4">
          <iframe src={NVO4} width="99%" height="460px" frameborder="0" allowFullScreen />
        </Route>

        // 7.
        <Route path="/formula">
          <img src={Formula} alt="Formula" width="98%" />
        </Route>
        <Route path="/nvo-math-7">
          <iframe src={NVO7} width="99%" height="460px" frameborder="0" allowFullScreen />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default Routes;