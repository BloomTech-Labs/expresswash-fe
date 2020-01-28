import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBCard, MDBContainer, MDBRow, MDBCol, MDBTypography, MDBRating, MDBIcon } from "mdbreact";
import {Line, Doughnut, HorizontalBar} from 'react-chartjs-2';
import Moment from 'react-moment';

import { setWorkStatus, getWorkStatus, getWashCount, getWashRating } from '../../actions/washerDashboardActions.js';
import WashMap from "./WashMap.js";
import Styled from "styled-components";
import Logo from "../../images/wowo-logo-word-full.svg";
import auth from "../auth.js";

const jwt = require('jsonwebtoken');

// image class
const Img = Styled.img`
    // margin: 25px 0 25px 0;
`;

// map class
const MapContainer = Styled.div`
    height: 500px;
    width: 100%;
    position: relative;
`;

// data for the line graph
const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monthly Earnings",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

// data for the donut graph
const donutData = {
  labels: ["Trucks", "Sedans", "Coupes"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

// data for the horizontal bar graph
const horizontalBarData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Miles Driven",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [1300, 1450, 1394, 1634, 1563, 1497, 1395]
    }
  ]
};

// decode the user token information
const token = localStorage.getItem('token');
var decoded = jwt.decode(token);
decoded = jwt.decode(token, {complete: true});

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user.user
    }
  }
  
  async componentDidMount(){
    const stateFromToken = await this.tokenData(decoded);
    // console.log("state payload", this.state.user);
    const { id } = this.state.user;
    const getWorkStatus = this.props.getWorkStatus(id);
    const countWash = this.props.getWashCount(id);
    const washerRating = this.props.getWashRating(id);

    Promise.all([getWorkStatus, countWash, washerRating])
      .then(res => {
        // console.log("resolved both the washer rating and wash count");
        this.setState(prevState => {
          let user = { ...prevState.user };
          user.workStatus = this.props.washerDashboardReducer.washerDashWorkStatusData.workStatus;
          return { user };
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // toggle switch handler without API endpoint connection yet
  handleSwitchChange = () => {
    this.setState(prevState => {
      let user = { ...prevState.user };
      user.workStatus = !prevState.user.workStatus;
      return { user };
    })
    const payload = {
      "id": this.state.user.id,
      "workStatus": !this.state.user.workStatus
    }
    // console.log("payload is", payload);
    this.props.setWorkStatus(payload)
      .then((res) => {
        console.log("updated workStatus");
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  tokenData = (decoded) => {
    // set state from token information
    // console.log("decoded.payload before adding to state", decoded.payload);
    const { sub, workStatus, creationDate, firstName } = decoded.payload;
    this.setState(prevState => {
      // let user = { ...prevState.user };
      let user = { ...prevState.user, id: sub, workStatus, creationDate, firstName };
      return {user};
    });
    // console.log("user from tokenData", user);
  }

  // logout function removes user data from localStorage and redirects to login
  logout = (evt) => {
    evt.preventDefault()
    
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('id');
    // auth.logout(() => {
    //   this.props.history.push('/login');
    // })
  }

  accountAge = creationDate => {
    var moment = require('moment');
    moment().format();

    const date = moment(creationDate).fromNow(true);
    const splitValues = date.split(" ");
    let value = 0;
    let pronoun = splitValues[1].charAt(0).toUpperCase() + splitValues[1].slice(1);
    if(splitValues[0] === "a") {
      value = 1;
    } else {
      value = splitValues[0];
    }
    if(pronoun === "Few") {
      pronoun = "Minute";
    }
    const myObject = { value, pronoun };
    return myObject;
  }

  render() {
    // console.log("user from state", this.state.user);
    const {
            washerDashWashCountLoading,
            washerDashWashCountData,
            washerDashRatingLoading,
            washerDashRatingData
          } = this.props.washerDashboardReducer;
    const { user } = this.state;
    // console.log("props is", this.props);
    // console.log("washerDashWash Count Data", washerDashWashCountData.count);
    // labels for the rating stars
    let washRating = washerDashRatingData || 5;
    let ratingStars = [
      {
        tooltip: 'Very Bad'
      },
      {
        tooltip: 'Poor'
      },
      {
        tooltip: 'Ok'
      },
      {
        tooltip: 'Good',
      },
      {
        tooltip: 'Excellent'
      }
    ]
    // select star to display from rating
    const washRatingRound = Math.round(washRating);
    ratingStars[washRatingRound-1] = {
      ...ratingStars[washRatingRound-1],
      choosed: true
    }
    const accountDate = this.accountAge(user.creationDate);
    return (
      <MDBContainer className="mb-5">
          <MDBRow className="mt-4 mb-4 align-items-end">
            <MDBCol className="text-left">
              <Img src={Logo} style={{ width: 180 + "px" }} alt="logo" />
            </MDBCol>
            <MDBCol className="text-right">
              <MDBRow end>
                <MDBCol>
                  <MDBTypography tag='h5'>
                    <small><strong>
                    <Moment format="dddd, LT" />
                    </strong><br />
                    <span className="text-muted">
                      <Moment format="MMMM Do, YYYY" />
                    </span></small>
                  </MDBTypography>
                </MDBCol>
                <MDBCol md="1">
                  <span onClick={this.logout}><MDBIcon icon="sign-out-alt" /></span>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
                <MDBRow className="align-items-center">
                  <MDBCol className="text-left">
                    <MDBRow className="align-items-center">
                      <MDBCol md="3">
                        <Img src="http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png" style={{ width: 100 + "px" }} alt="logo" />
                      </MDBCol>
                      <MDBCol>
                        <MDBTypography tag='h3'>
                            <small className="text-muted">Welcome back,</small><br />
                            <strong>{user.firstName || "firstName"}!</strong>
                        </MDBTypography>
                        <div className='custom-control custom-switch'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customSwitches'
                            checked={this.state.user.workStatus}
                            onChange={this.handleSwitchChange}
                            readOnly
                          />
                          <label className='custom-control-label' htmlFor='customSwitches'>
                            Active Washer
                          </label>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol>
                    <MDBRow className="align-items-center">
                      <MDBCol>
                        <MDBTypography tag='h3'>
                          <strong>{accountDate.value || "#"}</strong><br />
                          <small className="text-muted">{accountDate.pronoun || "time"}</small>
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol>
                        { washerDashWashCountLoading
                        ? <span><i className="fas fa-spinner fa-pulse fa-3x"></i></span>
                        :
                        <MDBTypography tag='h3'>
                          <strong>{washerDashWashCountData.count}</strong><br />
                          <small className="text-muted">Washes</small>
                        </MDBTypography>
                        }
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-4">
            <MDBCol md="8">
              <MDBCard>
                <MapContainer>
                  <WashMap />
                </MapContainer>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard className="mb-4 pt-2 pb-2 align-items-center">
                { washerDashRatingLoading
                  ? <span><p>Loading..</p><i className="fas fa-spinner fa-pulse fa-3x"></i></span>
                  : (
                    <React.Fragment>
                      <MDBTypography tag='h3'>
                        <strong>{washRating}</strong><br />
                        <small className="text-muted">Ratings</small>
                      </MDBTypography>
                      <MDBRating data={ratingStars} />
                    </React.Fragment>
                  )
                }
              </MDBCard>
              <MDBCard className="mb-4">
                <Line data={lineData} />
              </MDBCard>
              <MDBCard className="mb-4">
                <Doughnut data={donutData} />
              </MDBCard>
              <MDBCard className="mb-4">
                <HorizontalBar data={horizontalBarData} />
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer,
  washerDashboardReducer: state.washerDashboardReducer
});

const mapDispatchToProps = {
  setWorkStatus,
  getWorkStatus,
  getWashCount,
  getWashRating
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navigation)
);