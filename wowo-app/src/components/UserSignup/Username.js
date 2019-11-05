import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export default function Username(props) {
    if (props.currentStep !== 1) {
        return null
    }
    
    return (
        <div>
            <MDBContainer>
                <div className= 'd-flex justify-content-center'>
                    <MDBCol center md='3'>
                        <div class='w-auto'>
                        <MDBInput
                            id='username'
                            name='username'
                            type='text'
                            label='Username'
                            value={props.username}
                            onChange={props.handleChange}
                        />
                        </div>
                        <MDBInput
                            id='password'
                            name='password'
                            type='password'
                            label='Password'
                            value={props.password}
                            onChange={props.handleChange}
                        />
                    </MDBCol>
                </div>
            </MDBContainer>
        </div>
    )
}