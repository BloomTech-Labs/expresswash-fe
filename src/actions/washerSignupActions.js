// import axios
import axios from "axios";

// import action types
import {
  CREATE_WASHER_START,
  CREATE_WASHER_SUCCESS,
  CREATE_WASHER_FAILED,
  LOADING,
  NEW_CLIENT_SUCCESS,
  NEW_CLIENT_ERROR,
} from "./actionTypes.js";

// action creators
export function register(payload) {
  return (dispatch) => {
    dispatch({ type: LOADING });
    const clientPayload = {
      accountType: "washer",
      email: payload.email,
      password: payload.password,
      firstName: payload.firstName,
      lastName: payload.lastName,
      phoneNumber: payload.phoneNumber,
      streetAddress: payload.streetAddress,
      city: payload.city,
      state: payload.state,
      zip: payload.zip,
    };

    console.log("clientPayload", clientPayload);
    return axios
      .post(
        "http://wowotest-env.eba-en3d8xcw.us-east-1.elasticbeanstalk.com/auth/registerClient",
        clientPayload
      )
      .then((user) => {
        console.log("WasherSignupActions.js, user", user);
        dispatch({ type: NEW_CLIENT_SUCCESS, payload: user.data });
        dispatch({ type: CREATE_WASHER_START });
        const washerPayload = {
          rateMedium: "25",
        };
        console.log("payload", washerPayload);
        axios
          .post(
            `http://wowotest-env.eba-en3d8xcw.us-east-1.elasticbeanstalk.com/auth/registerWasher/${user.data.user.id}`,
            washerPayload
          )
          .then((res) => {
            console.log("Login Washer Response: ", res);
            dispatch({ type: CREATE_WASHER_SUCCESS, payload: res.data });
          })
          .catch((err) => {
            console.log("error message:", err.response.data);
            dispatch({
              type: CREATE_WASHER_FAILED,
              payload: err.response.data,
            });
          });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch({ type: NEW_CLIENT_ERROR, payload: err.response.data });
      });
  };
}
