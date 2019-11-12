import React from "./node_modules/react";
import {
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBRow,
  MDBIcon
} from "./node_modules/mdbreact";
import { MdChevronLeft } from "./node_modules/react-icons/md";

export default function FillerPage() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src="https://picsum.photos/200/300" style={{ height: "100px" }} />
      </div>

      <p style={{ paddingTop: "25px" }}>Welcome to our registration page!</p>
      <p class="text-center">Already have an account?</p>
      <div className="d-flex justify-content-center">
        <MDBBtn size="lg" color="primary">
          Click Here
        </MDBBtn>
      </div>
    </div>
  );
}
