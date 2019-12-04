import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import Styled from "styled-components";
import Logo from "../../images/wowo-logo-word-full.svg";

const position = [51.505, -0.09]

const Img = Styled.img`
    // margin: 25px 0 25px 0;
`;

export default function Navigation() {
  return (
    <MDBContainer>
        <MDBRow className="mt-4 align-items-end">
          <MDBCol>
            <Img src={Logo} style={{ width: 180 + "px" }} alt="logo" />
          </MDBCol>
        {/* </MDBRow>
        <MDBRow> */}
          <MDBCol>
            Welcome back, $WasherName!
          </MDBCol>
          <MDBCol>
            Friday, 9:24PM<br />December 7th, 2019
          </MDBCol>
          <MDBCol>
            <Map center={position} zoom={13}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
              </Marker>
            </Map>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
}
