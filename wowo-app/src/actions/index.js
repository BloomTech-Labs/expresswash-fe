import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_ERROR, AUTH_SIGN_OUT, DASHBOARD_GET_DATA } from './types';

// AKA LE ActionCreators.js
/*
    ActionCreators => create/return Actions ({}) => dispatched => middle-wares => reducers
*/

export const oauthGoogle = (data) => {
	return async (dispatch) => {
		console.log('we have obtained', data);

		const res = await axios.post('http://localhost:2626/users/oauth/google', {
			access_token: data
		});

		console.log('res', res);

		dispatch({
			type: AUTH_SIGN_UP,
			payload: res.data.token
		});

		localStorage.setItem('JWT_TOKEN', res.data.token);
		axios.defaults.headers.common['Authorization'] = res.data.token;
	};
};

export const oauthFacebook = (data) => {
	return async (dispatch) => {
		console.log('we have obtained', data);

		const res = await axios.post('http://localhost:2626/users/oauth/facebook', {
			access_token: data
		});

		console.log('res', res);

		dispatch({
			type: AUTH_SIGN_UP,
			payload: res.data.token
		});

		localStorage.setItem('JWT_TOKEN', res.data.token);
		axios.defaults.headers.common['Authorization'] = res.data.token;
	};
};

export const oauthGithub = (data) => {
	return async (dispatch) => {
		console.log('action for github data =>', data);

		const res = await axios.get('http://localhost:2626/users/oauth/github', {
			access_token: data
		});

		console.log('response=>', res);

		dispatch({
			type: AUTH_SIGN_UP,
			payload: res.data.token
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
			console.log('inside [ActionCreator] signUp called!');

			const res = await axios.post('http://localhost:2626/users/signup', data);

			// console.log('res',res)

			console.log('entering [ActionCreator] signUp dispatch');

			dispatch({
				type: AUTH_SIGN_UP,
				payload: res.data.token
			});

			localStorage.setItem('JWT_TOKEN', res.data.token);
			axios.defaults.headers.common['Authorization'] = res.data.token;
		} catch (err) {
			dispatch({
				type: AUTH_ERROR,
				payload: 'email already in use'
			});

			console.error('Houston we have a problem', err);
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
			console.log('inside [ActionCreator] signIn called!');

			const res = await axios.post('http://localhost:2626/users/signin', data);

			// console.log('res',res)

			console.log('entering [ActionCreator] signIn dispatch');

			dispatch({
				type: AUTH_SIGN_IN,
				payload: res.data.token
			});

			localStorage.setItem('JWT_TOKEN', res.data.token);
			axios.defaults.headers.common['Authorization'] = res.data.token;
		} catch (err) {
			dispatch({
				type: AUTH_ERROR,
				payload: "email & password isn't valid"
			});

			console.error('Houston we have a problem', err);
		}
	};
};

export const getSecret = () => {
	return async (dispatch) => {
		try {
			console.log('[ActionCreator] trying to get SECRET ');
			const res = await axios.get('http://localhost:2626/users/secret');
			console.log('res', res);

			dispatch({
				type: DASHBOARD_GET_DATA,
				payload: res.data.secret
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
			payload: ''
		});
	};
};
