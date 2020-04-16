import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";


import './LandingPage.css';
import logo from '../../images/wowo-logo-full.JPG';
import { MdRecentActors } from 'react-icons/md';
import auth from '../auth'


export default class LandingPage extends React.Component {
//   componentDidMount() {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const type = localStorage.getItem("userType");


	componentDidMount() {
		const token = localStorage.getItem("token");
		if(token) {
			const type = localStorage.getItem("userType");
			auth.login(() => {
			  if( type === "client" )
			  {
				this.props.history.push("/clientDash")
			  } 
			  else if ( type === "washer" ) 
			  {
				this.props.history.push("/washerDash")
			  }
			  else 
			  {
				return null
			  }
			})
		}
	}
	
	render(){
		return (
			<MDBContainer className="landing-container">
				<section className="header-container">
					<MDBContainer className="landing-header">
						<MDBRow className="mb-4">
							<MDBCol>
								<img className="wowo-logo" src={logo} alt="logo" />
							</MDBCol>
						</MDBRow>
					</MDBContainer>
	
					<MDBContainer className="header-buttons-container">
						<Link to="user-register">
							<MDBBtn className="sign-up-btn" color="primary">
								{' '}
								Sign Up{' '}
							</MDBBtn>
						</Link>
						<p className="btn-or">or</p>
						<Link to="login">
							<MDBBtn className="login-btn"> Log In </MDBBtn>
						</Link>
					</MDBContainer>
				</section>
	
				<section className="landing-information">
					<MDBContainer className="landing-info-card about">
						<h3 className="landing-info-header">
							<MDBIcon icon="car" /> We Bring The Wash To You
						</h3>
						<p className="landing-info-content">
							WoWo is an all new approach to car washing. Instead of driving to the carwash and waiting in
							long lines, we bring the car wash to you. Just select your wash, type of car, and time and our
							washers will come to you to perform a quality car wash. Get an instant quote here:
						</p>
	
						{/* <MDBBtn className="quote-btn" color="primary">Instant Quote</MDBBtn> */}
					</MDBContainer>
	
					<MDBIcon className="info-dot" icon="circle" />
	
					<MDBContainer className="landing-info-card">
						<h3 className="landing-info-header eco">
							<MDBIcon icon="leaf" /> Eco-Friendly
						</h3>
						<p className="landing-info-content">
							WoWo is dedicated to delivering an eco-friendly carwash. All of our washers are trained to used
							eco-friendly cleaners and practices. That way we can deliver a spectacular car wash while
							protecting the enviroment.
						</p>
					</MDBContainer>
	
					<MDBIcon className="info-dot" icon="circle" />
	
					<MDBContainer className="landing-info-card washers">
						<h3 className="landing-info-header">
							<MDBIcon icon="hand-holding-usd" /> Earn Extra Income
						</h3>
	
						<p className="landing-info-content">
							WoWo welcomes anyone whoe enjoys washing, detailing, or even just looking to make some extra
							income. All prospective washers must go through training to learn practices and standards. Once
							the training is complete, the washer can then use the app to find users in need of a carwash.
							Once the job is completed and the customer satisfied, the washer receives a cut of the cost as
							well as tips.
						</p>
					</MDBContainer>
	
					<Link to="washer-register">
						<MDBBtn className="washer-sign-up-btn" color="primary">
							{' '}
							Become a Washer{' '}
						</MDBBtn>
					</Link>
				</section>
			</MDBContainer>
		);
	}

}
