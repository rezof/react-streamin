import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Show from "./ShowView";

import * as showActions from "./ShowState";

export default connect(
  state => ({
    ...state
  }),
  dispatch => ({
    actions: bindActionCreators(showActions, dispatch)
  })
)(Show);
