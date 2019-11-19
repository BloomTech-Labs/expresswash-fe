import axios from 'axios';

// User Actions
export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';


export function loginUser(email, password) {
    return(dispatch) => {
        dispatch({type: LOGGING_IN})
  
        return axios
            .post("https://pt6-wowo.herokuapp.com/auth/login", {email, password})
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userType', res.data.userType)
                localStorage.setItem('id', res.data.user.id)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                  })
            })
            .catch(err => {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: err
                })
            })
    }
  }