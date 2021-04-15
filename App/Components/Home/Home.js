import React from "react";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { HomeContainer, SideBar } from "./HomeElements";
import SideBarItems from "./SideBarItems";
import Table from "./Table";
import Settings from "./Settings";
import Menu from "./Menu";

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
