import React from "react";
import { Switch, Route } from "react-router-dom";

import auth from './components/auth/auth.js';

export default (
  <Switch>
    <Route component={ auth } path="/" exact />
  </Switch>
)
