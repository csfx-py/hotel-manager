import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Auth = (props) => {
  const check = (token) => {
    if (token) {
      const { exp } = jwt_decode(token);
      if (exp * 1000 < new Date().getTime()) {
        ipcApi.messageApi.sendMessage({
          message: "Your account validity has expired, Contact Admin",
          title: "Error",
        });
        props.setToken(null);
        return false;
      }
      return true;
    }
    return false;
  };

  return (
    <>
      {check(props.token) ? <Redirect to="/home" /> : <Redirect to="/login" />}
    </>
  );
};

export default Auth;
