import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link,
         useParams, NavLink } from 'react-router-dom';
import {Redirect} from "react-router";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Reset from "./Reset/Reset";
import './router.css';

export default function App() {
  return (
    <Router basename={"/hw19-react/"}>
      <div>
        <nav className="navigator">
          <span>
            <NavLink className="nav_button" to={"/signup"}>Sign Up</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/signin"}>Sign In</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/reset"}>Reset</NavLink>
          </span>
        </nav>

        <Switch>
          <Route exact path={"/"}>
            <Redirect to={"/signup"} />
          </Route>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>
          <Route exact path={"/signin"}>
            <Signin />
          </Route>
          <Route exact path={"/reset"}>
            <Reset />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


