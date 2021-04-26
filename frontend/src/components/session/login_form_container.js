import { connect } from "react-redux";
import LoginForm from './login_form';
import { login } from '../../actions/auth_actions';

const mSTP = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  message: state.messages.message,
});

const mDTP = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password))
});

export default connect(mSTP, mDTP)(LoginForm);