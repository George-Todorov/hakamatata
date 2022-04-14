import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import MathTest from "../components/MathTest";

const Topics = () => {
    let match = useRouteMatch();
  
    return (
      <main className="view-wrapper">
        <h2 className="title">ТЕСТОВЕ</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/math-4`}>Математика - 4. клас</Link>
          </li>
          <li>
            <Link to={`${match.url}/math-7`}>Математика - 7. клас</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            
          </Route>
        </Switch>
    </main>
    );
  }

  function Topic() {
    let { topicId } = useParams();
    return MathTest(topicId);
  }

  export default Topics;