import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (OriginalComponent) => {
	class MixedComponent extends Component {
		checkAuth() {
			if (!this.props.isAuth && !this.props.jwtToken) {
				console.log('User is not auth, decline access');
				this.props.history.push('/');
			}
		}

		componentDidMount() {
			// check if user is auth
			this.checkAuth();
		}

		componentDidUpdate() {
			// check if user is auth
			this.checkAuth();
		}

		render() {
			return <OriginalComponent {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		return {
			isAuth: state.auth.isAuthenticated,
			jwtToken: state.auth.token
		};
	}
	return connect(mapStateToProps)(MixedComponent);
};

// Dashboard <- component / dashboard
