import React, { Component } from 'react';
import Username from './Username.js'
import Name from './Name.js'
import Address from './Address.js'

class UserSignup extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            username: '',
            phoneNumber: '',
            address: ''
        };
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }

    nextStep() {
        let currentStep = this.state.currentStep;

        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({ currentStep: currentStep })
    }

    prevStep() {
        let currentStep = this.state.currentStep;

        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({ currentStep: currentStep })
    }
    
    get getPrevStep() {
        let currentStep = this.state.currentStep;

        if(currentStep !== 1) {
            return (
                <button type='button' onClick={this.prevStep}>
                    prev
                </button>
            )
        }
        return null
    }

    get getNextStep() {
        let currentStep = this.state.currentStep

        if(currentStep < 3) {
            return (
                <button type='button' onClick={this.nextStep}>
                    next
                </button>
            )
        }
        return null
    }

    handleChange = (evt) => {
        evt.preventDefault();
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = async evt => {
        evt.preventDefault()
        const { email, firstName, lastName, password, username, phoneNumber, address } = this.state;
        const newUserPackage = { email, firstName, lastName, password, username, phoneNumber, address }
        
        this.setState({
            email: '',
            firstName: '',
            password: '',
            username: '',
            phoneNumber: '',
            address: '',
            currentStep: 1
        })
    }

    render() {
        return (
            <div>
                <div>add user</div>
                <div>
                    {this.getPrevStep}
                    {this.getNextStep}
                </div>
                <Username 
                    currentStep= {this.state.currentStep}
                    handleChange= {this.handleChange}
                    username = {this.state.username}
                    password = {this.state.password}
                />
                <Name 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    firstName={this.state.firstName}
                    lastName={this.state.LastName}
                    email={this.state.email}
                />
                <Address 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    address={this.state.address}
                    phoneNumber={this.state.phoneNumber}
                />
            </div>
        )
    }
}

export default UserSignup