import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App}></Route>
        <Route exact path='/users' component={UsersList}></Route>
        <Route exact path='/form' component={UserForm}></Route>
        <Route exact path='/form/:id' component={UserForm}></Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
