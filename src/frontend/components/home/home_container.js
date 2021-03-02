import { connect } from "react-redux";
import Home from './home';
import { clearMessage } from '../../actions/message_actions'

const mSTP = (state) => ({

});

const mDTP = (dispatch) => ({
  clearMessage: () => dispatch(clearMessage()),
});

export default connect(mSTP, mDTP)(Home);