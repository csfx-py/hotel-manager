import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {
  LoginContainer,
  LoginImage,
  Image,
  Form,
  MainContainer,
  Input,
  Button,
} from "./LoginElements";
import WelcomeImage from "../../images/welcome.svg";

const Login = (props) => {
  const [disable, setDisable] = useState(false);
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });

  const api = axios.create({
    baseURL: `https://csfxapi-login.herokuapp.com/user/`,
  });

  useEffect(() => {}, [props.token]);

  const handleValues = (e) => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    const res = await api.post("/login", {
      email: loginValues.email,
      password: loginValues.password,
    });
    if (res.data.auth) {
      props.setToken(res.data.token);
    } else {
      setLoginValues({ email: "", password: "" });
      ipcApi.messageApi.sendMessage({
        message: res.data.message,
        title: "Error",
      });
      setDisable(false);
    }
  };
  return (
    <>
      {props.token && <Redirect to="/" />}
      <MainContainer>
        <LoginContainer>
          <LoginImage>
            <Image src={WelcomeImage} alt="React Logo" />
          </LoginImage>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              id=""
              placeholder="email"
              value={loginValues.email}
              onChange={handleValues}
              autoFocus={true}
            />
            <Input
              type="password"
              name="password"
              id=""
              placeholder="password"
              value={loginValues.password}
              onChange={handleValues}
            />
            <Button type="submit" disabled={disable}>
              Login
            </Button>
          </Form>
        </LoginContainer>
      </MainContainer>
    </>
  );
};

export default Login;
