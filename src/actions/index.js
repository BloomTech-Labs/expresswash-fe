import axios from 'axios';
import {
  AUTH_SIGN_UP,
  AUTH_SIGN_IN,
  AUTH_ERROR,
  AUTH_SIGN_OUT,
  DASHBOARD_GET_DATA,
} from './types';

export const oauthGoogle = (data) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:2626/users/oauth/google', {
      access_token: data,
    });

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token,
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;
  };
};

export const oauthFacebook = (data) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:2626/users/oauth/facebook', {
      access_token: data,
    });

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token,
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;
  };
};

export const oauthGithub = (data) => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:2626/users/oauth/github', {
      access_token: data,
    });

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token,
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);

    axios.defaults.headers.common['Authorization'] = res.data.token;
  };
};

export const signUp = (data) => {
  /*
        Step1) Use the data to make HTTP request to our BE & send it along
        Step2) Take the BE response (jwtToken is here now!)
        Step3) Dispatch user just signed up (with jwtToken) done
        Step4) Save the jwtToken into our local Storage
        */

  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:2626/users/signup', data);
      dispatch({
        type: AUTH_SIGN_UP,
        payload: res.data.token,
      });
      localStorage.setItem('JWT_TOKEN', res.data.token);
      axios.defaults.headers.common['Authorization'] = res.data.token;
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'email already in use',
      });
    }
  };
};

export const signIn = (data) => {
  /*
        Step1) Use the data to make HTTP request to our BE & send it along
        Step2) Take the BE response (jwtToken is here now!)
        Step3) Dispatch user just signed up (with jwtToken) done
        Step4) Save the jwtToken into our local Storage
        */

  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:2626/users/signin', data);
      dispatch({
        type: AUTH_SIGN_IN,
        payload: res.data.token,
      });

      localStorage.setItem('JWT_TOKEN', res.data.token);
      axios.defaults.headers.common['Authorization'] = res.data.token;
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: "email & password isn't valid",
      });
      console.error('Houston we have a problem', err);
    }
  };
};

export const getSecret = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:2626/users/secret');
      dispatch({
        type: DASHBOARD_GET_DATA,
        payload: res.data.secret,
      });
    } catch (err) {
      console.log('err', err);
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    localStorage.removeItem('JWT_TOKEN');
    axios.defaults.headers.common['Authorization'] = '';

    dispatch({
      type: AUTH_SIGN_OUT,
      payload: '',
    });
  };
};
