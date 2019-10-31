import React, { Component } from 'react';
import Username from './Username.js'

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
                    {this.getP}
                    {this.getNextStep}
                </div>
                <Username 
                    currentStep= {this.state.currentStep}
                    handleChange= {this.handleChange}
                    username = {this.state.username}
                    password = {this.state.password}
                />
            </div>
        )
    }
}

export default UserSignup