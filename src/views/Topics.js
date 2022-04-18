import React from "react";
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
        <h2 className="title">ТЕСТОВЕ</h2>
  
        <ul className="tests-wrapper">
          <li className="test-title">
            <Link to={`${match.url}/math-4`}>Математика - 4. клас</Link>
          </li>
          <li className="test-title">
            <Link to={`${match.url}/math-7`}>Математика - 7. клас</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          {/* <Route path={match.path}>
            <h3>20 задачи за 60 минути</h3>
          </Route> */}
        </Switch>
    </main>
    );
  }

  function Topic() {
    let { topicId } = useParams();
    return TestRoute(topicId);
  }

  export default Topics;