import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export default function Address(props) {
    if (props.currentStep !==3) {
        return null
    }
    return (
        <div>
            <div>Addy?</div>
            <MDBCol center md='3'>
                <MDBInput
                    id='address'
                    name='address'
                    type='text'
                    label= 'Address'
                    value={props.address}
                    onChange={props.handleChange}
                />
                <MDBInput
                    id='phoneNumber'
                    name='phoneNumber'
                    type='number'
                    label='Phone Number'
                    value={props.phoneNumber}
                    onChange={props.handleChange}
                />
                <MDBBtn>Fin!</MDBBtn>
            </MDBCol>
        </div>
    )
}