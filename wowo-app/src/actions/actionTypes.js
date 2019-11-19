import axios from "axios";

// User Actions
export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";

// Washer Signup action types
export const CREATE_WASHER_START = "CREATE_WASHER_START";
export const CREATE_WASHER_SUCCESS = "CREATE_WASHER_SUCCESS";
export const CREATE_WASHER_FAILED = "CREATE_WASHER_FAILED";

export const LOADING = "LOADING";
export const NEW_CLIENT_SUCCESS = "NEW_CLIENT_SUCCESS";
export const NEW_CLIENT_ERROR = "NEW_CLIENT_ERROR";

export function createClient(payload) {
  return dispatch => {
    dispatch({ type: LOADING });

    return axios
      .post("https://pt6-wowo.herokuapp.com/auth/registerClient", payload)
      .then(res => {
        console.log(res);
        dispatch({ type: NEW_CLIENT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch({ type: NEW_CLIENT_ERROR, payload: err.response.data });
      });
  };
}
