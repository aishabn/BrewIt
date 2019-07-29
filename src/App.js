import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";

//Components
import Timer from "./Components/Timer/Timer";
import BrewingMethods from "./Components/Menu/BrewingMethods";

class App extends Component {
  getView() {
    return (
      <Switch>
        <Redirect exact from="/" to="/" />
        <Route path="/timer/" component={Timer} />
        <Route path="/brewmethods/" component={BrewingMethods} />
      </Switch>
    );
  }
  render() {
    return (
      <div>
        <main>{this.getView()} </main>
      </div>
    );
  }
}

export default withRouter(App);
