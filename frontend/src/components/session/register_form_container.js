import { connect } from "react-redux";
import RegisterForm from './register_form';
import { register } from '../../actions/auth_actions';

const mSTP = (state) => ({
  message: state.messages.message,
});

const mDTP = (dispatch) => ({
  register: (username, email, password) => dispatch(register(username, email, password))
});

export default connect(mSTP, mDTP)(RegisterForm);