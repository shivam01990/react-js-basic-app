import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./components/layout";
import About from "./components/pages/about"
import Contact from "./components/pages/contact"
import Services from "./components/pages/services"

    const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={About}></IndexRoute>
    <Route path="about" component={About}></Route>
    <Route path="services" component={Services}></Route>
    <Route path="contact" component={Contact}></Route>
        </Route>
    </Router>
    , app);
