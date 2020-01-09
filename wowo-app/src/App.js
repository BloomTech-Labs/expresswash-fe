import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import FindWash from "./components/ClientDashboard/FindWash/FindWash.js";
import Login from "./components/Login/Login.js";
import UserSignUp from "./components/UserSignup/UserSignup";
import WasherNavigation from "./components/WasherDashboard/Navigation.js";
import ClientDashboard from "./components/ClientDashboard/FindWash/FindWash.js";
import WasherSignUp from "./components/WasherSignUp/WasherSignUpForm";
import ScheduleWash from "./components/ClientDashboard/FindWash/ScheduleWash";
import ScheduleWash2 from "./components/ClientDashboard/FindWash/ScheduleWash2";
import ClientNavigation from "./components/ClientDashboard/Navigation.js";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { PrivateRoute } from "./components/PrivateRoute.js"
import "./App.css";

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

function App() {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
		<Container className='App'>
			<GlobalStyle />
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/user-register" component={UserSignUp} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/find-wash" component={FindWash} />
				<Route exact path="/washer-register" component={WasherSignUp} />
				<PrivateRoute exact path="/clientDash" component={ClientDashboard} />
				<PrivateRoute exact path="/washerDash" component={WasherNavigation} />
				<Route exact path="/schedule" component={ScheduleWash} />
				<Route path="/schedule-wash" component={ScheduleWash2} />
				<Route path="/client-navigation" component={ClientNavigation} />
				<Route exact path="*" component={() => "404 Page Not Found."} />
			</Switch>
			{/* <Route
  					path='/schedule-wash'
  					render={(props) => <ScheduleWash2 {...props} isAuthed={true} />}
/> */}
      </Container>
    </MuiPickersUtilsProvider>
  );
}


export default App;
