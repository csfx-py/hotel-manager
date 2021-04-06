import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [disable, setDisable] = useState(false);
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });

  const api = axios.create({
    baseURL: `https://csfxlog-api.herokuapp.com/user/`,
  });

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
      setLoginValues({ email: "", password: "" });
      history.push("/");
      setDisable(false);
    } else {
      ipcApi.messageApi.sendMessage({
        message: res.data.message,
        title: "Error",
      });
      setDisable(false);
    }
  };
  return (
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
  );
};

export default Login;
