import React, { useState } from "react";
import {Helmet} from "react-helmet";

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import TestRoute from "../components/TestRoute";

const Topics = () => {
  let match = useRouteMatch();

  return (
    <main className="view-wrapper">
      <Helmet>
        <title>zita-math-test</title>
      </Helmet>
      <div id="test-math" >
        {TestRoute("math-7")}
        <ul className="tests-wrapper">
          {/* <li className="test-title">
            <Link to={`${match.url}/math-1`}>Математика - 1. клас</Link>
          </li>
          <li className="test-title">
            <Link to={`${match.url}/math-2`}>Математика - 2. клас</Link>
          </li>
          <li className="test-title">
            <Link to={`${match.url}/math-3`}>Математика - 3. клас</Link>
          </li>
          <li className="test-title">
            <Link to={`${match.url}/math-4`}>Математика - 4. клас</Link>
          </li> */}
          {/* <li className="test-title">
            <Link to={`${match.url}/math-5`}>Математика - 5. клас</Link>
          </li> */}
          {/* <li className="test-title">
            <Link to={`${match.url}/math-6`}>Математика - 6. клас</Link>
          </li> */}
          {/* <li className="test-title">
            <Link to={`${match.url}/math-7`}>Математика - 7. клас</Link>
          </li> */}
        </ul>
      </div>

      {/* <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
      </Switch> */}
  </main>
  );
}

function Topic() {
  let { topicId } = useParams();
  return TestRoute(topicId);
}

export default Topics;