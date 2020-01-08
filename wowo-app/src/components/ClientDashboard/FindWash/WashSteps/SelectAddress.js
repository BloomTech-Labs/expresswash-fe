import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import Styled from "styled-components";

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


class SelectAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, inputHandler } = this.props;
        return (
            <Container>
                <Form> 
                    <MDBCol md="12">
                        <MDBInput
                            label="Enter your car location"
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
                    {this.props.addresses > 0 ?
                        this.props.addresses.map(address => {  
                        })
                    :
                        <h4>Click here to add a address to your profile</h4>
                    }
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
