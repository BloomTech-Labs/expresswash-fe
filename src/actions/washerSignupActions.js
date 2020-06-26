// import axios
import axios from 'axios';

// import action types
import {
  CREATE_WASHER_START,
  CREATE_WASHER_SUCCESS,
  CREATE_WASHER_FAILED,
  LOADING,
  NEW_CLIENT_SUCCESS,
  NEW_CLIENT_ERROR,
} from './actionTypes.js';

// action creators
export function register(payload) {
  return (dispatch) => {
    dispatch({ type: LOADING });
    const clientPayload = {
      accountType: 'washer',
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

    const DB_URL = 'https://serverprod.expresswash.us';

    return axios
      .post(DB_URL + '/auth/registerClient', clientPayload)
      .then((user) => {
        dispatch({ type: NEW_CLIENT_SUCCESS, payload: user.data });
        dispatch({ type: CREATE_WASHER_START });
        const washerPayload = {
          rateMedium: '25',
        };
        axios
          .post(
            `${DB_URL}/auth/registerWasher/${user.data.user.id}`,
            washerPayload
          )
          .then((res) => {
            dispatch({ type: CREATE_WASHER_SUCCESS, payload: res.data });
          })
          .catch((err) => {
            dispatch({
              type: CREATE_WASHER_FAILED,
              payload: err.response.data,
            });
          });
      })
      .catch((err) => {
        dispatch({ type: NEW_CLIENT_ERROR, payload: err.response.data });
      });
  };
}
