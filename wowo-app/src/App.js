
import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.js';
import FindWash from './components/ClientDashboard/FindWash/FindWash.js';
import Login from './components/Login/Login.js';
import UserSignUp from './components/UserSignup/UserSignup';
import WasherNav from './components/WasherDashboard/Navigation.js';
import ClientNav from "./components/ClientDashboard/Navigation";
import WasherSignUp from './components/WasherSignUp/WasherSignUpForm';
import ScheduleWash from './components/ClientDashboard/FindWash/ScheduleWash'
import './App.css';



const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap')

    html, body {
        font-family: 'Open Sans', sans-serif !important;
    }

    #root {
        min-height: 100vh;
    }
`;

const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: localStorage.token ? true : false,
		}
		// this.loginCheck = this.loginCheck.bind(this);
	}

	handleLogin = () => {
		this.setState({ loggedIn: true })
		console.log(this.state.loggedIn)
	}

	handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userType');
		this.setState({
		  loggedIn: false
		})
	}  

	render() {
		const {loggedIn} = this.state;
		return (
			<Container className="App">
				<GlobalStyle />
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/user-register" component={UserSignUp} />
					<Route path="/login" render={(props) => <Login {...props} handleLogin={this.handleLogin} loginCheck={this.loginCheck} /> }/>
					<Route path="/find-wash" component={FindWash} />
					<Route path="/washer-register" component={WasherSignUp} />
					<Route path="/clientNav" render={() => (
						loggedIn ? ( <ClientNav /> ) : (<Redirect to="/" />)
					)}/>
					<Route path="/washerNav" render={() => (
						loggedIn ? ( <WasherNav /> ) : (<Redirect to="/" />)
					)}/>
					<Route path="/schedule" component={ScheduleWash} />
				</Switch>
			</Container>
		);
	}
}

export default App;
