import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './LandingPage.css';
import logo from '../../images/logo_title.png';
import auth from '../auth';
export default class LandingPage extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      const type = localStorage.getItem('userType');
      auth.login(() => {
        if (type === 'client') {
          this.props.history.push('/clientDash');
        } else if (type === 'washer') {
          this.props.history.push('/washerDash');
        } else {
          return null;
        }
      });
    }
  }

  render() {
    return (
      <MDBContainer className="landing-container">
        <section className="header-container">
          <MDBContainer className="landing-header">
            <MDBRow className="mb-4">
              <MDBCol>
                <img
                  className="logo"
                  src={logo}
                  alt="logo"
                  style={{ width: '70%' }}
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="header-buttons-container">
            <Link to="login">
              <MDBBtn className="login-btn" color="info">
                {' '}
                Log In{' '}
              </MDBBtn>
            </Link>
            <p className="btn-or">or</p>
            <Link to="user-register">
              <MDBBtn className="sign-up-btn" color="primary">
                {' '}
                Sign Up{' '}
              </MDBBtn>
            </Link>
          </MDBContainer>
        </section>

        <section className="landing-information">
          <MDBContainer className="landing-info-card about">
            <h3 className="landing-info-header">
              <MDBIcon icon="car" /> We Bring The Wash To You
            </h3>
            <p className="landing-info-content">
              ExpressWash is an all new approach to car washing. Instead of
              driving to the carwash and waiting in long lines, we bring the car
              wash to you. Just tell us your desired car wash location, type of
              car, date, and time and our washers will come to you to perform a
              quality car wash. You will recieve an email notification once the
              wash is complete!
            </p>
          </MDBContainer>
          <MDBIcon className="info-dot" icon="circle" />

          <MDBContainer className="landing-info-card washers">
            <h3 className="landing-info-header">
              <MDBIcon icon="hand-holding-usd" /> Earn Extra Income
            </h3>
            <p className="landing-info-content">
              Become a washer with ExpressWash today by signing up through the
              link below. You will see all of the nearby available jobs and can
              accept them with a simple click. We'll notify the customer once
              the job has been completed and make sure you get paid fast!
            </p>
          </MDBContainer>
          <Link to="washer-register">
            <MDBBtn className="sign-up-btn" color="info">
              {' '}
              Become a Washer{' '}
            </MDBBtn>
          </Link>
        </section>
      </MDBContainer>
    );
  }
}
