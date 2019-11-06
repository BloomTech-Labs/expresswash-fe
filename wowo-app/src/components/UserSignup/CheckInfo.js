import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

// export default function CheckInfo(props) {
//   if (props.currentStep !== 4) {
//     return null;
//   }

//   return (
//     <div>
//       <div className="d-flex justify-content-center p-3">
//         <p>Please verify your info below {currentStep}</p>
//       </div>
//       {/* <textarea value= `${this.props.firstName}` /> */}
//     </div>
//   );
// }

class CheckInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }

    const {
      firstName,
      lastName,
      email,
      username,
      sAddress,
      phoneNumber,
      zipcode,
      sAddress2,
      city,
      state
    } = this.props;
    return (
      <div>
        <MDBInput label="first name" value={firstName} />
        <MDBInput label="Last Name" value={lastName} />
        <MDBInput label="Email" value={email} />
        <MDBInput label="Username" value={username} />
        <MDBInput label="sAddress" value={sAddress} />
        <MDBInput label="sAddress2" value={sAddress2} />
        <MDBInput label="zipcode" value={zipcode} />
        <MDBInput label="city" value={city} />
        <MDBInput label="state" value={state} />
        <MDBInput label="phone Number" value={phoneNumber} />
      </div>
    );
  }
}

export default CheckInfo;
