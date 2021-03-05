import { connect } from "react-redux";
import Profile from './profile';

const mSTP = (state) => ({
  user: state.auth.user,
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(Profile);