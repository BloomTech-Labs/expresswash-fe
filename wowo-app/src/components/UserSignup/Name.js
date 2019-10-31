import React from 'react';

export default function Name(props) {
    if(props.currentStep !== 2) {
        return null
    }
    return (
        <div>
            <div>
                <p>Whats Your Name?</p>
            </div>
            <input
                id='email'
                name='email'
                type='text'
                placeholder='Email'
                value={props.email}
                onChange={props.handleChange}
            />
            <input 
                id='firstName'
                name='firstName'
                type='text'
                placeHolder='First Name'
                value={props.firstName}
                onChange={props.handleChange}
            />
            <input 
                id='lastName'
                name='lastName'
                type='text'
                placeholder='Last Name'
                value = {props.lastName}
                onChange={props.handleChange}
            />
        </div>
    )
}