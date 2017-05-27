import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _Home from "./HomeView";

import * as HomeViewActions from "./HomeState";

export default connect(
  state => ({
    ...state
  }),
  dispatch => {
    return {
      actions: bindActionCreators(HomeViewActions, dispatch)
    };
  }
)(_Home);
