import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js';
import auth from './components/auth/auth.js';

export default (
  <Switch>
    <Route component={ auth } exact path="/" />
    <Route component={ Dashboard } path="/dashboard" />

  </Switch>
)
