import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
import Home from "./Home"
import About from "./About"

const routing = (
  <Router>
    <div>
      <h1>REACT ROUTING</h1>
      <Route path="/h" component={Home}/>
      <Route path="/a" component={About}/>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById("root"));