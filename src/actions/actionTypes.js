import axios from 'axios';

// User Actions Types
export const GET_CLIENT_INFO_SUCCESS = 'GET_CLIENT_INFO_SUCCESS';
export const GET_CLIENT_INFO_ERROR = 'GET_CLIENT_INFO_ERROR';
export const UPDATE_CLIENT_INFO_SUCCESS = 'UPDATE_CLIENT_INFO_SUCCESS';
export const UPDATE_CLIENT_INFO_ERROR = 'UPDATE_CLIENT_INFO_ERROR';
export const GET_CLIENT_CARS_SUCCESS = 'GET_CLIENT_CARS_SUCCESS';
export const GET_CLIENT_CARS_ERROR = 'GET_CLIENT_CARS_ERROR';
export const GET_CLIENT_RATING_ERROR = 'GET_CLIENT_RATING_ERROR';
export const GET_CLIENT_RATING_SUCCESS = 'GET_CLIENT_RATING_SUCCESS';

// Washer Signup action types
export const CREATE_WASHER_START = 'CREATE_WASHER_START';
export const CREATE_WASHER_SUCCESS = 'CREATE_WASHER_SUCCESS';
export const CREATE_WASHER_FAILED = 'CREATE_WASHER_FAILED';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

// User signup action types
export const LOADING = 'LOADING';
export const NEW_CLIENT_SUCCESS = 'NEW_CLIENT_SUCCESS';
export const NEW_CLIENT_ERROR = 'NEW_CLIENT_ERROR';

// Add a Car to User signup actions
export const ADD_CAR_START = 'ADD_CAR_START';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';
export const ADD_CAR_FAILED = 'ADD_CAR_FAILED';

// Remove a Car
export const DELETE_CAR_START = 'DELETE_CAR_START';
export const DELETE_CAR_SUCCESS = 'DELETE_CAR_SUCCESS';
export const DELETE_CAR_FAILED = 'DELETE_CAR_FAILED';

// Job action types
export const CREATE_JOB_START = 'CREATE_JOB_START';
export const CREATE_JOB_SUCCESS = 'CREATE_JOB_SUCCESS';
export const CREATE_JOB_FAILED = 'CREATE_JOB_FAILED';
export const GET_USER_JOBS_START = 'GET_USER_JOBS_START';
export const GET_USER_JOBS_SUCCESS = 'GET_USER_JOBS_SUCCESS';
export const GET_USER_JOBS_FAILED = 'GET_USER_JOBS_FAILED';
export const GET_AVAILABLE_JOBS_START = 'GET_AVAILABLE_JOBS_START';
export const GET_AVAILABLE_JOBS_SUCCESS = 'GET_AVAILABLE_JOBS_SUCCESS';
export const GET_AVAILABLE_JOBS_FAILED = 'GET_AVAILABLE_JOBS_FAILED';
export const ACCEPT_JOB_START = 'ACCEPT_JOB_START';
export const ACCEPT_JOB_SUCCESS = 'ACCEPT_JOB_SUCCESS';
export const ACCEPT_JOB_FAILED = 'ACCEPT_JOB_FAILED';

// Washer Dashboard action types
export const WASHER_SET_WORK_STATUS_START = 'WASHER_SET_WORK_STATUS_START';
export const WASHER_SET_WORK_STATUS_SUCCESS = 'WASHER_SET_WORK_STATUS_SUCCESS';
export const WASHER_SET_WORK_STATUS_FAILED = 'WASHER_SET_WORK_STATUS_FAILED';
export const WASHER_GET_WORK_STATUS_START = 'WASHER_GET_WORK_STATUS_START';
export const WASHER_GET_WORK_STATUS_SUCCESS = 'WASHER_GET_WORK_STATUS_SUCCESS';
export const WASHER_GET_WORK_STATUS_FAILED = 'WASHER_GET_WORK_STATUS_FAILED';
export const WASHER_GET_WASH_COUNT_START = 'WASHER_GET_WASH_COUNT_START';
export const WASHER_GET_WASH_COUNT_SUCCESS = 'WASHER_GET_WASH_COUNT_SUCCESS';
export const WASHER_GET_WASH_COUNT_FAILED = 'WASHER_GET_WASH_COUNT_FAILED';
export const WASHER_GET_RATING_START = 'WASHER_GET_RATING_START';
export const WASHER_GET_RATING_SUCCESS = 'WASHER_GET_RATING_SUCCESS';
export const WASHER_GET_RATING_FAILED = 'WASHER_GET_RATING_FAILED';
// Global backend URL variable
export const DB_URL = 'https://serverprod.expresswash.us';

export function loginUser(email, password) {
  return (dispatch) => {
    dispatch({ type: LOGGING_IN });

    return axios
      .post(DB_URL + '/auth/login', { email, password })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userType', res.data.user.accountType);
        localStorage.setItem('id', res.data.user.id);
        localStorage.setItem('firstName', res.data.user.firstName);
        localStorage.setItem('lastName', res.data.user.lastName);
        localStorage.setItem('washerId', res.data.user.washer.washerId);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
          payload: err.response,
        });
      });
  };
}

export function createClient(payload) {
  return (dispatch) => {
    dispatch({ type: LOADING });

    return axios
      .post(DB_URL + '/auth/registerClient', payload)
      .then((res) => {
        dispatch({ type: NEW_CLIENT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: NEW_CLIENT_ERROR, payload: err.response.data });
      });
  };
}

export function addACar(payload) {
  return (dispatch) => {
    dispatch({ type: ADD_CAR_START });
    const formData = new FormData();
    formData.append('photo', payload.photo);
    return axios
      .post(DB_URL + '/cars', { ...payload, photo: '' })
      .then((res) => {
        axios({
          url: `${DB_URL}/images/car/${res.data.carId}`,
          method: 'POST',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${localStorage.getItem('token')}`,
          },
        }).then((res) => {
          dispatch({ type: ADD_CAR_SUCCESS, payload: res.data });
        });
      })
      .catch((err) => {
        dispatch({ type: ADD_CAR_FAILED, payload: err.message });
      });
  };
}

export function deleteACar(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_CAR_START });
    return axios
      .delete(`${DB_URL}/cars/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_CAR_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: DELETE_CAR_FAILED, payload: err.message });
      });
  };
}

export function getClientInformation(id) {
  return (dispatch) => {
    dispatch({ type: LOGGING_IN });
    return axios
      .get(`${DB_URL}/users/${id}`)
      .then((res) => {
        dispatch({ type: GET_CLIENT_INFO_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_CLIENT_INFO_ERROR, payload: err.message });
      });
  };
}
export function updateClientInformation(id, changes) {
  return (dispatch) => {
    return axios
      .put(`${DB_URL}/users/${id}`, changes)
      .then((res) => {
        dispatch({ type: UPDATE_CLIENT_INFO_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_CLIENT_INFO_ERROR, payload: err.message });
      });
  };
}
// update to get user by id
export function getClientCars(id) {
  return (dispatch) => {
    return axios
      .get(`${DB_URL}/users/${id}`)
      .then((res) => {
        dispatch({ type: GET_CLIENT_CARS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_CLIENT_CARS_ERROR });
      });
  };
}

export function getClientRating(id) {
  return (dispatch) => {
    return axios
      .get(`${DB_URL}/users/${id}`)
      .then((res) => {
        dispatch({ type: GET_CLIENT_RATING_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_CLIENT_RATING_ERROR });
      });
  };
}

export function scheduleJob(jobInfo) {
  return (dispatch) => {
    dispatch({ type: CREATE_JOB_START });
    return axios
      .post(DB_URL + '/jobs/new', jobInfo)
      .then((res) => {
        dispatch({ type: CREATE_JOB_SUCCESS, payload: res.data[0] });
      })
      .catch((err) => {
        dispatch({ type: CREATE_JOB_FAILED, payload: err.message });
      });
  };
}

export function getUserJobs(userId) {
  return (dispatch) => {
    dispatch({ type: GET_USER_JOBS_START });
    return axios
      .get(`${DB_URL}/jobs/user/${userId}`)
      .then((res) => {
        dispatch({ type: GET_USER_JOBS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_USER_JOBS_FAILED, payload: err.message });
      });
  };
}
