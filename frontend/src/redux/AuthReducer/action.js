import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const getAuth = (userData) => (dispatch) => {
  dispatch(loginRequest());
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData)
    .then((res) => {
      localStorage.setItem("EnglishQuestToken", res.data.token);
      return dispatch(loginSuccess(res.data));
    })
    .catch((err) => dispatch(loginFailure()));
};
