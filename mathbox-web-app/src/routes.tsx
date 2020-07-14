import * as React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Board from "./pages/Board";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/signin" exact component={SignIn}></Route>
        <Route path="/board" exact component={Board}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}
