// import axios
import axios from 'axios';

// define action types
import {
  CREATE_WASHER_START,
  CREATE_WASHER_SUCCESS,
  CREATE_WASHER_FAILED
} from './actionTypes.js';

// action creators
export function register(payload) {
  return (dispatch) => {
    dispatch({ type: CREATE_WASHER_START })

    return axios.post('https://pt6-wowo.herokuapp.com/auth/registerWasher', payload)
      .then((res) => {
        dispatch({ type: CREATE_WASHER_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        console.log('error message:', err.response.data)
        dispatch({ type: CREATE_WASHER_FAILED, payload: err.response.data })
      })
  }
}