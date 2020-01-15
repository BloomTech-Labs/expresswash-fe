// import axios from
import axios from 'axios';

// import action types from
import {
    WASHER_SET_WORK_STATUS_START,
    WASHER_SET_WORK_STATUS_SUCCESS,
    WASHER_SET_WORK_STATUS_FAILED,
    WASHER_GET_WASH_COUNT_START,
    WASHER_GET_WASH_COUNT_SUCCESS,
    WASHER_GET_WASH_COUNT_FAILED,
    WASHER_GET_RATING_START,
    WASHER_GET_RATING_SUCCESS,
    WASHER_GET_RATING_FAILED
  } from '../actions/actionTypes.js';

  // action creators
export function setWorkStatus(payload) {
    return (dispatch) => {
        dispatch({type: WASHER_SET_WORK_STATUS_START})

        return axios.put('https://pt6-wowo.herokuapp.com/jobs/setWorkStatus', payload)
          .then((res) => {
              console.log(res);
              dispatch({type: WASHER_SET_WORK_STATUS_SUCCESS, payload: res})
          })
          .catch((err) => {
              console.log('error message', err.response.data)
              dispatch({type: WASHER_SET_WORK_STATUS_FAILED, payload: err.response.data})
          })
    }
}