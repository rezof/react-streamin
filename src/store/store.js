import { compose, createStore, applyMiddleware } from "redux";
import * as reduxLoop from "redux-loop-symbol-ponyfill";
import logger from "redux-logger";

import reducers from "./reducers";

const createStoreWithEnhancers = compose(
  reduxLoop.install(),
  applyMiddleware(logger)
)(createStore);

export default createStoreWithEnhancers(reducers);
