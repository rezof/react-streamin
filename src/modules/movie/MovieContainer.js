import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MovieView from "./MovieView";
import * as movieActions from "./MovieState";

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(movieActions, dispatch)
  })
)(MovieView);
