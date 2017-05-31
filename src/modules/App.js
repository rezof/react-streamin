import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./home/HomeContainer";
import Show from "./show/ShowContainer";

import store from "../store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/show/:id" component={Show} />
            <Route path="/hi" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
