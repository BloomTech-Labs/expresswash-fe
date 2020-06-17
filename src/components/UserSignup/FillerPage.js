import React from "react";
import { MDBBtn } from "mdbreact";
import logo from "../../images/logo_title.png";
import { Link } from "react-router-dom";

export default function FillerPage() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <img src={logo} alt="website logo" style={{ height: "150px" }} />
        </Link>
      </div>

      <p style={{ paddingTop: "25px" }}>Welcome to our registration page!</p>
      <p className="text-center">Already have an account?</p>
      <div className="d-flex justify-content-center">
        <Link to="/login">
          <MDBBtn size="lg" color="primary">
            Click Here
          </MDBBtn>
        </Link>
      </div>
    </div>
  );
}
