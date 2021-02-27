export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

import AuthService from '../services/auth/auth_service';

import { setMessage } from './message_actions';

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
});

export const registerFail = () => ({
  type: REGISTER_FAIL
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const registerFail = () => ({
  type: REGISTER_FAIL
});

export const registerFail = () => ({
  type: REGISTER_FAIL
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});


export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password)

}

