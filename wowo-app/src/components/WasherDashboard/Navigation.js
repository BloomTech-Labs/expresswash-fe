import React from "react";
// import { Link } from "react-router-dom";
import { MDBCard, MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";

import Styled from "styled-components";
import Logo from "../../images/wowo-logo-word-full.svg";

const Img = Styled.img`
    // margin: 25px 0 25px 0;
`;

export default function Navigation() {
  return (
    <MDBContainer>
        <MDBRow className="mt-4 mb-4 align-items-end">
          <MDBCol className="text-left">
            <Img src={Logo} style={{ width: 180 + "px" }} alt="logo" />
          </MDBCol>
          <MDBCol className="text-right">
            Friday, 9:24PM<br />December 7th, 2019
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
              <MDBRow>
                <MDBCol className="text-left">
                  <MDBRow>
                    <MDBCol md="3">
                      <Img src="http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png" style={{ width: 100 + "px" }} alt="logo" />
                    </MDBCol>
                    <MDBCol>
                      <MDBTypography tag='h3'>
                          <small className="text-muted">Welcome back,</small><br />
                          <strong>James!</strong>
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBRow>
                    <MDBCol>
                      <MDBTypography tag='h3'>
                        <strong>6</strong><br />
                        <small className="text-muted">Months</small>
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol>
                      <MDBTypography tag='h3'>
                        <strong>47</strong><br />
                        <small className="text-muted">Washes</small>
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol>
            <Img src="https://www.dsdinc.com/wp-content/uploads/2017/08/map-placeholder.jpg" style={{ height: 300 + "px" }} alt="logo" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
}
