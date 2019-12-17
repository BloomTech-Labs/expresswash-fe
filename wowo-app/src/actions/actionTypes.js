import axios from "axios";

// User Actions
export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
export const GET_CLIENT_INFO_SUCCESS = "GET_CLIENT_INFO_SUCCESS";
export const GET_CLIENT_INFO_ERROR = "GET_CLIENT_INFO_ERROR";
export const UPDATE_CLIENT_INFO_SUCCESS = "UPDATE_CLIENT_INFO_SUCCESS";
export const UPDATE_CLIENT_INFO_ERROR = "UPDATE_CLIENT_INFO_ERROR";

// Washer Signup action types
export const CREATE_WASHER_START = "CREATE_WASHER_START";
export const CREATE_WASHER_SUCCESS = "CREATE_WASHER_SUCCESS";
export const CREATE_WASHER_FAILED = "CREATE_WASHER_FAILED";
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

// User signup actions
export const LOADING = "LOADING";
export const NEW_CLIENT_SUCCESS = "NEW_CLIENT_SUCCESS";
export const NEW_CLIENT_ERROR = "NEW_CLIENT_ERROR";

export function loginUser(email, password) {
  return dispatch => {
    dispatch({ type: LOGGING_IN });

    return axios
      .post("https://pt6-wowo.herokuapp.com/auth/login", { email, password })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userType", res.data.userType);
        localStorage.setItem("firstName", res.data.firstName);
        localStorage.setItem("lastName", res.data.lastName);
        localStorage.setItem("id", res.data.id);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILED,
          payload: err
        });
      });
  };
}

export function createClient(payload) {
  return dispatch => {
    dispatch({ type: LOADING });

    return (
      axios
        // .post("https://pt6-wowo.herokuapp.com/auth/registerClient", payload)
        .post("http://localhost:3300/auth/registerClient", payload)
        .then(res => {
          console.log(res);
          dispatch({ type: NEW_CLIENT_SUCCESS, payload: res.data });
        })
        .catch(err => {
          console.log(err.response.data);
          dispatch({ type: NEW_CLIENT_ERROR, payload: err.response.data });
        })
    );
  };
}

export const getClientInformation = id => async dispatch => {
  // const id = localStorage.id;
  console.log("this is id before the function runs", id);
  // dispatch({ type: LOADING });

  axios
    .get(`http://localhost:3300/users/${id}`)
    .then(res => {
      console.log("this is response from the call", res);
      dispatch({ type: GET_CLIENT_INFO_SUCCESS, payload: res.data });
      localStorage.setItem("email", res.data.email);
    })
    .catch(err => {
      dispatch({ type: GET_CLIENT_INFO_ERROR });
    });
};

export function updateClientInformation(id) {
  return dispatch => {
    return axios
      .put(`http://localhost:3300/users/${id}`, id)
      .then(res => {
        dispatch({ type: UPDATE_CLIENT_INFO_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: UPDATE_CLIENT_INFO_ERROR });
      });
  };
}
