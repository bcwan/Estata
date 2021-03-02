import { connect } from "react-redux";
import NavBar from './navbar';
import { logout } from '../../actions/auth_actions'

const mSTP = (state) => ({

});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar);