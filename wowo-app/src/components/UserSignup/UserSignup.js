import React, { Component } from 'react';
import Username from './Username.js'
import Name from './Name.js'
import Address from './Address.js'
import ProgressBar from './ProgressBar.js'

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class UserSignup extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            percentage: 0,
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

        if(this.state.percentage === 100)return
        this.setState(prevState => ({ percentage: prevState.percentage + 33.33}))
    }

    prevStep() {
        let currentStep = this.state.currentStep;

        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({ currentStep: currentStep })

        if(this.state.percentage === 0)return
        this.setState(prevState => ({ percentage: prevState.percentage - 33.33}))
    }
    
    get getPrevStep() {
        let currentStep = this.state.currentStep;

        if(currentStep !== 1) {
            return (
                <MDBBtn type='button' onClick={this.prevStep}>
                    prev
                </MDBBtn>
            )
        }
        return null
    }

    get getNextStep() {
        let currentStep = this.state.currentStep

        if(currentStep === 1) {
            return (
                <MDBBtn type='button' onClick={this.nextStep}>
                    next
                </MDBBtn>
            )
        } else if(currentStep === 2) {
            return (
                <MDBBtn type='button' onClick={this.nextStep}>
                    register
                </MDBBtn>
            )
        } else if(currentStep === 3) {
            return ( 
                <MDBBtn type='button' onClick={this.nextStep}>
                    Finish
                </MDBBtn>
            )
        }
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
                <MDBContainer>
                    <p text-center mb-4 >Add User</p>
                    <ProgressBar
                        percentage={this.state.percentage}
                    />
                    <div>
                        {this.getPrevStep}  
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
                    {this.getNextStep}
                </MDBContainer>
        )
    }
}

export default UserSignup