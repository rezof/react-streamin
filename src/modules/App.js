import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/HomeContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/hi" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
