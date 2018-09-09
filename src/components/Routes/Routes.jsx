import React, { Component } from "react";
import SignIn from "../body/signIn/signIn";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route path="/signin" component={SignIn} />
            <Route exact path="/" component={App} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
