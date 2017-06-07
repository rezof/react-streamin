import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as MoviesActions from "./MoviesState";
import MoviesView from "./MoviesView";

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(MoviesActions, dispatch)
  })
)(MoviesView);
