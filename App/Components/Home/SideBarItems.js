import React from "react";
import { useHistory } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { SideButton } from "./HomeElements";

const SideBarItems = (props) => {
  const history = useHistory();
  return (
    <>
      <div>
        <SideButton onClick={() => history.push("/home/table")}>
          Table
        </SideButton>
        <SideButton onClick={() => history.push("/home/menu")}>Menu</SideButton>
        <SideButton onClick={() => history.push("/home/settings")}>
          Settings
        </SideButton>
      </div>
      <SideButton onClick={props.handleLogout}>
        <BiLogOut />
        Logout
      </SideButton>
    </>
  );
};

export default SideBarItems;
