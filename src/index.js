import React from "react";
import {hydrate, render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import {HashRouter as Router} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

import registerServiceWorker from './ServiceWorker';

import App from "./App";

import './sass/index.scss';

const store = configureStore();
const wrapper = document.getElementById("zita-math-container");

const main = () => {
  return <Provider store={store}>
            <Router>
              <App />
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