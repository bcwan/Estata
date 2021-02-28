import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "../actions/auth_actions";

const user = JSON.parse(localStorage.getItem("user"));

const AuthReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case REGISTER_SUCCESS:
      
      break;
    case REGISTER_FAIL:
      
      break;
    case LOGIN_SUCCESS:
      
      break;
    case LOGIN_FAIL:
      
      break;
    case LOGOUT_SUCCESS:

      break;
    default:
      return oldState;
  }
}

export default AuthReducer;