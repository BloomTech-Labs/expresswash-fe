import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import Styled from "styled-components";
import HomeIcon from "./../../../../images/HomeIcon.js";
import WorkIcon from "./../../../../images/WorkIcon.js";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    padding: 15px;
    width: 100%;
`;

const AddressContainer = Styled.div`
`;

const UL = Styled.ul`
    list-style: none;
    padding: 0;
`

const LI = Styled.li`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
`

const IconContainer = Styled.div`
    margin-right: 10px;
`

const InfoContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const AddressName = Styled.p`
    font-size: 1.15rem;
    font-weight: 500;
    margin: 0;
`

const AddressInfo = Styled.p`
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
`


class SelectAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    click = event => {
        event.preventDefault();
        this.props.onClick();
        this.props.next();
    }

    render() {
        const { values, inputHandler } = this.props;
        return (
            <Container>
                <Form> 
                    <MDBCol md="12">
                        <MDBInput
                            label="Enter or choose your car location"
                            autoCapitalize="off"
                            autoCorrect="off"
                            maxLength="75"
                            type="text"
                            value={values.address}
                            onChange={inputHandler('address')}
                        />
                    </MDBCol>
                </Form>

                <AddressContainer>
                    {/* {this.props.addresses > 0 ?
                        this.props.addresses.map(address => {  
                        })
                    :
                        <h4>Click here to add a address to your profile</h4>
                    } */}

                    <UL>
                        <LI onClick={this.click} >
                            <IconContainer><WorkIcon width="30px" fill2="#ffffff" /></IconContainer>
                            <InfoContainer>
                                <AddressName>Work</AddressName>
                                <AddressInfo>Phoenix Municipal Court</AddressInfo>
                            </InfoContainer>
                        </LI>
                        <LI onClick={this.click} >
                            <IconContainer><HomeIcon width="30px" fill2="#ffffff" /></IconContainer>
                            <InfoContainer>
                                <AddressName>Home</AddressName>
                                <AddressInfo>1467 W. Mel Grove rd, Phoenix, Arizona</AddressInfo>
                            </InfoContainer>
                        </LI>
                    </UL>
                </AddressContainer>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SelectAddress)
);
