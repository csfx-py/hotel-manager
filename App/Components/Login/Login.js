import React from "react";
import {
  LoginContainer,
  LoginImage,
  Image,
  Form,
  MainContainer,
  Input,
  Button,
} from "./LoginElements";
import WelcomeImage from '../../images/welcome.svg'

const Login = (props) => {
  return (
    <MainContainer>
      <LoginContainer>
        <LoginImage>
          <Image src={WelcomeImage} alt="React Logo" />
        </LoginImage>
        <Form onSubmit={props.handleLoginSubmit}>
          <Input
            type="email"
            name="email"
            id=""
            placeholder="email"
            value={props.loginValues.email}
            onChange={props.handleLoginValues}
            autoFocus={true}
          />
          <Input
            type="password"
            name="password"
            id=""
            placeholder="password"
            value={props.loginValues.password}
            onChange={props.handleLoginValues}
          />
          <Button type="submit">Login</Button>
        </Form>
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;
