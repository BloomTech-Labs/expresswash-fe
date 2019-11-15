import axios from "axios";

// User Actions
export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
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

// export const createClient = newClientPackage => async dispatch => {
//   dispatch({ type: LOADING });

//   axios
//     .post("https://pt6-wowo.herokuapp.com/auth/registerClient", payload)
//     .then(res => {
//       dispatch({ type: NEW_CLIENT_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log("this, is the error", err);
//       dispatch({ type: NEW_CLIENT_ERROR, payload: err });
//     });
// };
