import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../actions/actionTypes.js";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import Styled from "styled-components";
import carImg from "../../images/undraw_city_driver_jh2h.svg";
import LoginLogo from "../../images/wowo-logo-word-full.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import auth from "../auth";


import FacebookLogin from 'react-facebook-login';
import GitHubLogin from 'react-github-login';

import { oauthFacebook, oauthGithub } from '../../actions/index';
import * as actions from '../../actions/index';




const LoginContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;

const ImgContainer = Styled.div`
    width: 100%;
`;

const LeftContainer = Styled.div`
    display: flex;
    width: 700px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightContainer = Styled.div`
    display: flex;
    width: 375px;
    background-color: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    margin: 0 0 10px;
    padding: 10px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 375px;
        background-color: transparent;
        border: none;
    }
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    padding: 15px;
    width: 350px;
`;

const Img = Styled.img`
    margin: 25px 0 25px 0;
`;

const ShowButton = Styled.div`
    position: absolute;
    top: 38px;
    right: 17px;
    cursor: pointer;
    color: #33B5E5;
    font-weight: 500;
`;

const Forgot = Styled.div`
    cursor: pointer;
    color: #33B5E5;
    font-weight: 400;
    margin: 0 0 20px 0;
`;

const SubmitContainer = Styled.div`
`;

const SocialButton = Styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    padding: 0;
    z-index: 98;
    margin: 20px 10px;
    border-radius: 50%;
    border: 2px solid #33B5E5;
    height: 40px;
    width: 40px;
    background-color: transparent;
    transition: 0.2s;
    text-align: center;
    color: #33B5E5;
    cursor: pointer;
`;

const FirstTime = Styled.div`
    margin: 15px auto 0 auto;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
`;

const Signup = Styled.div`
    cursor: pointer;
    color: #33B5E5;
    font-weight: 500;
    display: inline;
`;

const SocialLogin = Styled.p`
    margin: 30px auto 0 auto;
    text-align: center;
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      show: false,
      user: null,
    };
  }

  inputHandler = event => {
    event.preventDefault();

    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  showHandler = event => {
    event.preventDefault();
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    this.props
      .loginUser(email, password)
      .then((res) => {
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
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  async onSubmit(formData) {
		console.log('onSubmit got called');
		console.log('formData', formData);
		// we need to call action creator
		await this.props.signUp(formData);

		if (!this.props.errorMessage) {
			this.props.history.push('/dashboard');
		}
	}

	async responseFacebook(res) {
		console.log('responseFacebook=>', res);
		await this.props.oauthFacebook(res.accessToken);
		if (!this.props.errorMessage) {
			this.props.history.push('/dashboard');
		}
	}

	async responseGithub(res) {
		console.log('responseGITHUB=>', res);
		await this.props.oauthGithub(res.accessToken);
		if (!this.props.errorMessage) {
			this.props.history.push('/testdashboard');
		}
	}





  render() {


    console.log('*Login.js this.props=>', this.props);

    const { handleSubmit } = this.props;
    
    return (
      <LoginContainer>
        <LeftContainer>
          <ImgContainer>
            <img src={carImg} style={{ width: 90 + "%" }} alt="login screen" />
          </ImgContainer>
        </LeftContainer>

        <RightContainer>
          <Form onSubmit={this.handleSubmit}>
            <Link to="/">
              <Img src={LoginLogo} style={{ width: 40 + "%" }} alt="logo" />
            </Link> 

            <MDBCol md="12">
              <MDBInput
                label="Email"
                aria-required="true"
                autoCapitalize="off"
                autoCorrect="off"
                maxLength="75"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.inputHandler}
              />
            </MDBCol>

            <MDBCol md="12">
              <MDBInput
                label="Password"
                aria-required="true"
                autoCapitalize="off"
                autoCorrect="off"
                name="password"
                type={this.state.show === false ? "password" : "text"}
                value={this.state.password}
                onChange={this.inputHandler}
              />

              <ShowButton onClick={this.showHandler}>
                {this.state.show === false ? "Show" : "Hide"}
              </ShowButton>
            </MDBCol>

            <Link to="/forgotPassword">
              <Forgot>Forgot Password?</Forgot>
            </Link>

            <SubmitContainer>
              <MDBBtn color="info" type="submit">
                Login
              </MDBBtn>
            </SubmitContainer>
          </Form>

          <MDBContainer>
            <SocialLogin>or login via:</SocialLogin>

            <MDBRow center>
							<Link to="/facebookAuth">
								<FacebookLogin
									appId="457734818239475"
									autoLoad={false}
									textButton="Facebook "
									fields="name,email,picture"
									callback={this.responseFacebook}
									cssClass="btn btn-outline-primary"
								/>
								{/* <SocialButton>
                  <FontAwesomeIcon icon={faFacebookF} />
                  
                </SocialButton> */}
							</Link>

							<GitHubLogin
								clientId="5ca20a803c37ee00c735"
								buttonText="Github"
								redirectUri="http://localhost:2626/users/oauth/github"
								onSuccess={this.responseGithub}
								onFailure={this.responseGithub}
								className="btn btn-outline-danger"
							/>
							<Link to="/githubAuth">
								{/* <SocialButton>
                  <FontAwesomeIcon icon={faGoogle} />
                </SocialButton> */}
							</Link>
						</MDBRow>

            <FirstTime>
              Here For the first time?
              <Link to="/user-register">
                <Signup>Sign Up</Signup>
              </Link>
            </FirstTime>
          </MDBContainer>
        </RightContainer>
      </LoginContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errorMessage: state.auth.errorMessage
});

const mapDispatchToProps = {
  loginUser,
  oauthFacebook,
	oauthGithub
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
