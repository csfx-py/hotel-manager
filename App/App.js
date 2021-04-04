import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Home } from "./Components";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
