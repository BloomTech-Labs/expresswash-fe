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
              dispatch({type: WASHER_SET_WORK_STATUS_SUCCESS, payload: res})
          })
          .catch((err) => {
              dispatch({type: WASHER_SET_WORK_STATUS_FAILED, payload: err.response.data})
          })
    }
}

export function getWashCount(payload) {
    return dispatch => {
        dispatch({type: WASHER_GET_WASH_COUNT_START})

        return axios.post('https://pt6-wowo.herokuapp.com/jobs/howManyCompleted', { "id": payload })
          .then(res => {
              dispatch({ type: WASHER_GET_WASH_COUNT_SUCCESS, payload: res })
          })
          .catch(err => {
              dispatch({ type: WASHER_GET_WASH_COUNT_FAILED, payload: err.response.data })
          })
    }
}

export function getWashRating(payload) {
    return dispatch => {
        dispatch({type: WASHER_GET_RATING_START})

        return axios.post('https://pt6-wowo.herokuapp.com/ratings/washerAverage', { "id": payload })
          .then(res => {
              dispatch({ type: WASHER_GET_RATING_SUCCESS, payload: res })
          })
          .catch(err => {
              dispatch({ type: WASHER_GET_RATING_FAILED, payload: err.response.data })
          })
    }
}