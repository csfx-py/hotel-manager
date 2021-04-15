import React from "react";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import SideBarItems from "./SideBarItems";
import { HomeContainer, SideBar } from "./HomeElements";

const Home = (props) => {
  return (
    <>
      {!props.token && <Redirect to="/" />}
      <HomeContainer>
        <Router>
          <SideBar>
            <SideBarItems handleLogout={props.handleLogout} />
          </SideBar>
          <Switch></Switch>
        </Router>
      </HomeContainer>
    </>
  );
};

export default Home;
