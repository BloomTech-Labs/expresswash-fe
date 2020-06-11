import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import { getUserJobs } from "../../actions/actionTypes";
import styled from "styled-components";
import Payment from "./FindWash/WashSteps/Payment";

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  padding: 10px 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
const InfoText = styled.p`
  width: 90%;
`;
const InfoSpan = styled.span`
  font-weight: bold;
  whitespace: nowrap;
`;

class Washes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userJobs: this.props.jobs,
    };
  }

  getUserId() {
    return this.props.user.id || localStorage.getItem("id");
  }

  componentDidMount() {
    this.props.getUserJobs(this.getUserId());
  }

  render() {
    const { jobs } = this.props;
    return (
      <div>
        <h3>Your Washes</h3>
        <Link to="/clientDash">
          <MDBBtn>Back</MDBBtn>
        </Link>
        <div>
          {jobs ? (
            jobs.reverse().map((job) => {
              return (
                <Container key={job.jobId}>
                  <InfoContainer>
                    <InfoText>
                      <InfoSpan>Address: </InfoSpan> {job.washAddress}{" "}
                    </InfoText>
                    <InfoText>
                      <InfoSpan>Time: </InfoSpan> {job.timeRequested}{" "}
                    </InfoText>
                    <InfoText>
                      <InfoSpan>Wash Type: </InfoSpan> {job.jobType}{" "}
                    </InfoText>
                    <InfoText>
                      <InfoSpan>Price: </InfoSpan> $40{" "}
                    </InfoText>
                    <Payment />
                  </InfoContainer>
                </Container>
              );
            })
          ) : (
            <div>
              <h2>"You do not have any scheduled washes"</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobsReducer.jobs,
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  getUserJobs,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Washes));
