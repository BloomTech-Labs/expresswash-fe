import axios from "axios";

// User Actions
export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";

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

// Add a Car to User signup actions
export const ADD_CAR_START = 'ADD_CAR_START';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';
export const ADD_CAR_FAILED = 'ADD_CAR_FAILED';

export function loginUser(email, password) {
  return dispatch => {
    dispatch({ type: LOGGING_IN });

    return axios
      .post("https://pt6-wowo.herokuapp.com/auth/login", { email, password })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userType", res.data.userType);
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

// export function addACar (id, carId, color, licensePlate) {
//   return (dispatch) => {
//     dispatch({type: ADD_CAR_START})
//     return axios.post('https://pt6-wowo.herokuapp.com/cars/addACar', {id, carId, color, licensePlate})
//     .then((res) => {
//       const payload = res.data
//       console.log(res.data, 'addACar successful res.data')
//       dispatch({type: ADD_CAR_SUCCESS})
//     })
//     .catch((err) => {
//       // const payload = err.response ? err.response.data : err
//       dispatch({type: ADD_CAR_FAILED})
//       console.log(err,'addACar failed data')
//     })
//   }
// }