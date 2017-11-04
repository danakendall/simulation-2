import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js';
import auth from './components/auth/auth.js';
import Wizard1 from './components/Wizard/Wizard1';

export default (
  <Switch>
    <Route component={ auth } exact path="/" />
    <Route component={ Dashboard } path="/dashboard" />
    <Route component={ Wizard1 } path="/wizard1" />
  </Switch>
)
