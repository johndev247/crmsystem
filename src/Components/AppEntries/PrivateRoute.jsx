import React from "react";
import { Route, Redirect } from "react-router-dom";
import Main from "../Main/Main";
const isAuth = true;

const PrivateRoute = ({ children, ...res }) => {
  return (
    <Route
      render={() => (isAuth ? <Main>{children} </Main> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
