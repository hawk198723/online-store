import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "pages/App";
import Login from "pages/Login";
import NotFound from "pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);
export default Router;