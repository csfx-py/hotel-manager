import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SideBarItems from "./SideBarItems";
import { HomeContainer, SideBar } from "./HomeElements";

const Home = (props) => {
  return (
    <HomeContainer>
      <Router>
        <SideBar>
          <SideBarItems setToken={props.setToken} />
        </SideBar>
        <Switch></Switch>
      </Router>
    </HomeContainer>
  );
};

export default Home;
