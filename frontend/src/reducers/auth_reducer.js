import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "../actions/auth_actions";

// store user in localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

const authReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
      return {
        ...nextState,
        isLoggedIn: false
      }
    case LOGIN_SUCCESS:
      return {
        ...nextState,
        isLoggedIn: true,
        user: action.payload.user
      }
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      return {
        ...nextState,
        isLoggedIn: false,
        user: null
      }
    default:
      return oldState;
  }
}

export default authReducer;