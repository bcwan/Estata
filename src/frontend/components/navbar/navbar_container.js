import { connect } from "react-redux";
import NavBar from './navbar';
import { logout } from '../../actions/auth_actions';
import { clearMessage } from '../../actions/message_actions';

const mSTP = (state) => ({

});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearMessage: () => dispatch(clearMessage())
});

export default connect(mSTP, mDTP)(NavBar);