import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  return (
    <button
      onClick={(e) => {
        props.setToken(null);
        history.push("/");
      }}
    >
      Logout
    </button>
  );
};

export default Home;
