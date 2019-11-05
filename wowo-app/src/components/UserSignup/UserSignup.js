import React, { Component } from 'react';
import Username from './Username.js'
import Name from './Name.js'
import Address from './Address.js'
import ProgressBar from './progress-bar/ProgressBar.js'

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import { MdChevronLeft } from 'react-icons/md'
import 'mdbreact/dist/css/mdb.css'



class UserSignup extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            percentage: 33.33,
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

        if(this.state.percentage === 99.99)return
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
                <MdChevronLeft onClick={this.prevStep} />
            )
        }
        return null
    }

    get getNextStep() {
        let currentStep = this.state.currentStep

        if(currentStep === 1) {
            return (
                <div className='d-flex align-items-end flex-column p-3'>
                    <MDBCol>
                        <MDBBtn type='button' onClick={this.nextStep}>
                            register
                        </MDBBtn>
                        <p class='text-center'>By tapping on register button you agree to our<br /> <strong>Terms & Conditions</strong> </p>
                    </MDBCol>
                </div>
            )
        } else if(currentStep === 2) {
            return (
                <div className= 'd-flex justify-content-center'>
                    <MDBBtn type='button' onClick={this.nextStep}>
                        next
                    </MDBBtn>
                </div>
            )
        } else if(currentStep === 3) {
            return ( 
                <div></div>
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
            <div>
                <MDBContainer>
                    <div className="d-flex justify-content-center">
                        <p>Register</p>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <ProgressBar
                            percentage={this.state.percentage}
                        />
                    </div>
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
                </div>
        )
    }
}

export default UserSignup