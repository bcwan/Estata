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

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: { user: data }
});

export const loginFail = () => ({
  type: LOGIN_FAIL
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});


export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password)
    .then((response) => {
            dispatch(registerSuccess());
            dispatch(setMessage(response.data.message));
            return Promise.resolve();
          }, 
          (error) => {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            dispatch(registerFail());
            dispatch(setMessage(message));
            return Promise.reject();
          }
    );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password)
      .then((data) => {
        dispatch(loginSuccess(data));
        return Promise.resolve();
      },
      (error) => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        dispatch(loginFail());
        dispatch(setMessage(message));
        return Promise.reject();
      }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch(logoutSuccess());
}



