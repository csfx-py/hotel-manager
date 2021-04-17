import React from "react";
import { BiLogOut } from "react-icons/bi";
import { SideButton } from "../HomeElements";

const SideBarItems = (props) => {
  return (
    <>
      <div>
        <SideButton
          onClick={() =>
            props.setActiveTab({ menu: false, table: true, settings: false })
          }
        >
          Table
        </SideButton>
        <SideButton
          onClick={() =>
            props.setActiveTab({ menu: true, table: false, settings: false })
          }
        >
          Menu
        </SideButton>
        <SideButton
          onClick={() =>
            props.setActiveTab({ menu: false, table: false, settings: true })
          }
        >
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
