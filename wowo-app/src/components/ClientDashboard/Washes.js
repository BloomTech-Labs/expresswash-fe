import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBCard, MDBIcon, MDBCardTitle } from "mdbreact";
import Axios from "axios";
import WashesList from "./WashHelpers/WashesList.js";

class Washes extends Component {
  constructor() {
    super();
    this.state = {
      washes: [
        {
          washAddress: "111 test drive, City of SF, CA",
          paid: false,
          clientCarId: 1,
          creationDate: "2020-01-28T07:06:33.483+00:00"
        },
        {
          washAddress: "222 test drive, City of SF, CA",
          paid: false,
          clientCarId: 2,
          creationDate: "2020-01-28T07:06:33.483+00:00"
        }
      ],
      wash: {}
    };
  }
  componentDidMount() {
    const clientId = localStorage.id;

    Axios.post("https://pt6-wowo.herokuapp.com/jobs/getLatestJobClient	", {
      clientId
    })
      .then(res => {
        console.log("this is res on cdm", res);
        this.setState({
          washes: [res.data, ...this.state.washes]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <MDBContainer style={{ paddingTop: "5%" }}>
        <MDBCard>
          <div>
            <MDBCardTitle
              className="d-flex justify-content-between"
              style={{ borderBottom: "1.5px solid black" }}
            >
              <h3>Recent Washes</h3>
              <div>
                <Link to="/clientDash/navigation">
                  <MDBIcon icon="times" />
                </Link>
              </div>
            </MDBCardTitle>
            <div>
              <WashesList washes={this.state.washes} />
            </div>
          </div>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default Washes;
