import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import useLocalStorage from "./useLocalStorage";
import { Home, Login } from "./Components";

const App = () => {
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });
  const [token, setToken] = useLocalStorage(
    "token",
    localStorage.getItem("token") || ""
  );

  const api = axios.create({
    baseURL: `https://csfxlog-api.herokuapp.com/user/`,
  });

  useEffect(() => {
    if (token) {
      const { exp } = jwt_decode(token);
      if (exp * 1000 < new Date().getTime()) {
        BridgeApi.messageApi.sendMessage({
          message: "Your account validity has expired, Contact Admin",
          title: "Error",
        });
        setToken(null);
      }
    } else {
    }
  }, [token]);

  const handleLoginValues = (e) => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("/login", {
      email: loginValues.email,
      password: loginValues.password,
    });
    if (res.data.auth) {
      setToken(res.data.token);
      setLoginValues({ email: "", password: "" });
    } else {
      BridgeApi.messageApi.sendMessage({
        message: res.data.message,
        title: "Error",
      });
    }
  };

  const handleLogout = (e) => {
    setToken(null);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login
            handleLoginValues={handleLoginValues}
            handleLoginSubmit={handleLoginSubmit}
            loginValues={loginValues}
          />
        </Route>
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
