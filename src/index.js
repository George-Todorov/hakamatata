import React, { lazy, Suspense } from "react";
import {hydrate, render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import {HashRouter as Router} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import registerServiceWorker from './ServiceWorker';
import Job from "./assets/job.gif";
import './sass/index.scss';

const store = configureStore();
const wrapper = document.getElementById("zita-math-container");
const App = lazy(() => import("./App"))

const main = () => {
  wrapper.style.backgroundColor = "white";
  wrapper.style.minHeight = "740px";

  return <Provider store={store}>
            <Router>
              <Suspense fallback={
                <img 
                  src={Job} 
                  alt="Loading..." 
                  width="236px" 
                  style={window.innerWidth < 460 ? {margin: "200px 0 0 20%"} :  {margin: "200px 0 0 7%"}}
                />
              }>
                <App />
              </Suspense>
            </Router>
         </Provider>
}

if (wrapper.hasChildNodes()) {
  hydrate(
    main(),
    wrapper 
  );
} else {
  render(
    main(),
    wrapper 
  );
}

library.add(faIgloo);
registerServiceWorker();