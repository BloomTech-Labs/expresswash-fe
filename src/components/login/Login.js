import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../actions/actionTypes.js";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Styled from "styled-components";
import carImg from "../../images/Logo.png";
import LoginLogo from "../../images/logo_title.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import auth from "../auth";

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
    color: #FE5F55;
    font-weight: 500;
`;

const Forgot = Styled.div`
    cursor: pointer;
    color: #FE5F55;
    font-weight: 400;
    margin: 0 0 20px 0;
`;

const SubmitContainer = Styled.div`
`;

const ErrorMsgContainer = Styled.div`
    width: 75%
    border: 2px solid #FE5F55;
    padding: .5rem;
    font-weight: bold;
    color: #FE5F55;
    margin: 5px;

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
    color: #FE5F55;
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

  inputHandler = (event) => {
    event.preventDefault();

    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  showHandler = (event) => {
    event.preventDefault();
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    this.props
      .loginUser(email, password)
      .then((res) => {
        const type = localStorage.getItem("userType");

        auth.login(() => {
          if (type === "client") {
            this.props.history.push("/clientDash");
          } else if (type === "washer") {
            this.props.history.push("/washerDash");
          } else {
            return null;
          }
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  async onSubmit(formData) {
    await this.props.signUp(formData);
    if (!this.props.errorMessage) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { errorMessage } = this.props;
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
              <Img src={LoginLogo} style={{ width: 55 + "%" }} alt="logo" />
            </Link>
            {errorMessage && (
              <ErrorMsgContainer>{errorMessage.data.message}</ErrorMsgContainer>
            )}
            <MDBCol md="12">
              <MDBInput
                data-testid="email"
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
            <Link to="/login">
              <Forgot>Forgot Password?</Forgot>
            </Link>
            <SubmitContainer>
              <MDBBtn
                className="btn btn-light-blue btn-lg btn-rounded"
                type="submit"
                data-testid="login"
              >
                <strong>Login</strong>
              </MDBBtn>
            </SubmitContainer>
          </Form>

          <MDBContainer>
            <FirstTime>
              Here For the first time?
              <Link to="/user-register">
                <Signup> Sign Up</Signup>
              </Link>
            </FirstTime>
          </MDBContainer>
        </RightContainer>
      </LoginContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.userReducer.loading,
  user: state.userReducer.user,
  errorMessage: state.userReducer.error,
});

const mapDispatchToProps = {
  loginUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
