import React from 'react';

export default function Username(props) {
    if (props.currentStep !== 1) {
        return null
    }
    
    return (
        <div>
            <div>
                <p>registration information</p>
            </div>
            <input
                id='username'
                name='username'
                type='text'
                placeholder='Username'
                value={props.username}
                onChange={props.handleChange}
            />
            <input
                id='password'
                name='password'
                type='password'
                placeholder='Password'
                value={props.password}
                onChange={props.handleChange}
            />
        </div>
    )
}