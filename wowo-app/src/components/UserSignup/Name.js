import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export default function Name(props) {
    if(props.currentStep !== 2) {
        return null
    }
    return (
        <div>
            <div>
                <p>Whats Your Name?</p>
            </div>
            <div className= 'd-flex justify-content-center'>
                <MDBCol center md='3'>
                    <MDBInput
                        id='email'
                        name='email'
                        type='text'
                        label='Email'
                        value={props.email}
                        onChange={props.handleChange}
                    />
                    <MDBInput 
                        id='firstName'
                        name='firstName'
                        type='text'
                        label='First Name'
                        value={props.firstName}
                        onChange={props.handleChange}
                    />
                    <MDBInput 
                        id='lastName'
                        name='lastName'
                        type='text'
                        label='Last Name'
                        value = {props.lastName}
                        onChange={props.handleChange}
                    />
                </MDBCol>
            </div>
            <div className= 'd-flex justify-content-center'>
                
            </div>
        </div>
    )
}