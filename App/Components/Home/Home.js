import React from "react";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { HomeContainer, SideBar } from "./HomeElements";
import { Menu, SideBarItems, Settings, Table } from "./index";

const Home = (props) => {
  return (
    <>
      {!props.token && <Redirect to="/" />}
      <HomeContainer>
        <Router>
          <SideBar>
            <SideBarItems handleLogout={props.handleLogout} />
          </SideBar>
          <Switch>
            <Route exact path="/home/table">
              <Table />
            </Route>
            <Route exact path="/home/menu">
              <Menu />
            </Route>
            <Route exact path="/home/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
      </HomeContainer>
    </>
  );
};

export default Home;
