import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import CreateDonate from "./components/donate/CreateDonate";
import SearchResults from "./components/dashboard/SearchResults";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/searchResults" component={SearchResults} />
            <Route path="/donate" component={CreateDonate} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
