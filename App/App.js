import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import { Home, Login, Auth } from "./Components";

const App = () => {
  const [token, setToken] = useLocalStorage(
    "token",
    localStorage.getItem("token") || ""
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Auth setToken={setToken} token={token} />
        </Route>
        <Route exact path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route exact path="/home">
          <Home setToken={setToken} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
