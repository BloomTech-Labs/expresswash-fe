import React from 'react'

export default function Address(props) {
    if (props.currentStep !==3) {
        return null
    }
    return (
        <div>
            <div>Addy?</div>
            <input
                id='address'
                name='address'
                type='text'
                placeholder= 'Address'
                value={props.address}
                onChange={props.handleChange}
            />
            <input
                id='phoneNumber'
                name='phoneNumber'
                type='number'
                placeholder='Phone Number'
                value={props.phoneNumber}
                onChange={props.handleChange}
            />
            <button>Fin!</button>
        </div>
    )
}