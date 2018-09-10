import React, { Component } from "react";
import "./App.css";

import Body from "./components/body/body";
import SignIn from "./components/body/signIn/signIn";
import Register from "./components/body/signUp/register";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import SubmitAd from './components/submitAd/submit'
// import Register from "./components/body/signUp/register";
// import Routes from "./components/Routes/Routes.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route path="/signin" component={SignIn} />
            <Route path="/posting" component={SubmitAd} />
            <Route exact path="/" component={Comp} />
            <Route path="/register" component={Register} />
          </div>
        </Switch>
      </Router>

      // <Router>
      //   <div>
      //     <Header />
      //     {/* <Body /> */}
      //     {/* <Route exact={true} path="/signIn" component={SignIn} />
      //     <Route exact={true} path="/register" component={Register} /> */}

      //     <Routers />
      //     <Footer />
      //   </div>
      // </Router>
    );
  }
}

class Comp extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Body />
      </div>
    );
  }
}

export default App;
