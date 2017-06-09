import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./home/HomeContainer";
import Show from "./show/ShowContainer";
import Movies from "./movies/MoviesContainer";
import Movie from "./movie/MovieContainer";

import store from "../store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/shows" component={Home} />
            <Route path="/show/:id" component={Show} />
            <Route path="/movies" component={Movies} />
            <Route path="/movie/:id" component={Movie} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
