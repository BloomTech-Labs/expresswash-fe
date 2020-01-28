import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import Styled from "styled-components";
import Audi from "./../../../../images/Audi.js";
import Bmw from "./../../../../images/Bmw.js";
import Check from "./../../../../images/CheckMark.js";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;

const VehicleContainer = Styled.div`
    width: 100%;
    margin-bottom: 15px;
`;

const UL = Styled.ul`
    list-style: none;
    padding: 0;
`

const LI = Styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 15px 15px;
    cursor: pointer;

    &:hover {
        background: #80d4e2;
    }
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

const Selected = Styled.div``

const VehicleMake = Styled.p`
    font-size: 1.15rem;
    font-weight: 500;
    margin: 0;
`

const VehicleModel = Styled.p`
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
`

const ButtonContainer = Styled.div`
    position: absolute;
    bottom: 0%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 90%;
`

const PrevButton = Styled.div`
    background: #a6e1eb;
    border: 2px solid #a6e1eb;
    color: #ffffff;
    width: 40%;
    justify-content: center;
    padding: 0.75rem;
    text-align: center;
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: #00A8C5;
        border: 2px solid #00A8C5;
        color: #ffffff;
    }
`

const NextButton = Styled.div`
    background: #00A8C5;
    width: 40%;
    justify-content: center;
    padding: 0.75rem;
    text-align: center;
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
`



class ChooseVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            selected: false,
            vehicle1: false,
            vehicle2: false,
            vehicle3: false,
        };
    }

    // vehicle click handler
    click = id => event => {
        event.preventDefault();
        let make = document.getElementById(id).children[0].innerText;
        let model = document.getElementById(id).children[1].innerText;
        
        this.props.vehicleOnClick(make, model);
        if(id === 'vehicle-1') {
            this.setState({
                ...this.state,
                selected: true,
                vehicle1: true,
                vehicle2: false,
                vehicle3: false
            })
        } else if(id === 'vehicle-2') {
            this.setState({
                ...this.state,
                selected: true,
                vehicle1: false,
                vehicle2: true,
                vehicle3: false
            })
        } else if(id === 'vehicle-3') {
            this.setState({
                ...this.state,
                selected: true,
                vehicle1: false,
                vehicle2: false,
                vehicle3: true
            })
        }
    }



    render() {
        const {selected, vehicle1, vehicle2} = this.state;

        return (
            <Container>

                <VehicleContainer>
                    {/* {this.props.addresses > 0 ?
                        this.props.addresses.map(address => {  
                        })
                    :
                        <h4>Click here to add a address to your profile</h4>
                    } */}

                    <UL>
                        <LI>
                            <IconContainer><Bmw width="30px" /></IconContainer>
                            <InfoContainer id="vehicle-1" onClick={this.click("vehicle-1")}>
                                <VehicleMake>BMW</VehicleMake>
                                <VehicleModel>2019 Yellow M8 Gran Coupe</VehicleModel>
                            </InfoContainer>
                            <Selected>{vehicle1 ? <Check /> : null}</Selected>
                        </LI>
                        <LI>
                            <IconContainer><Audi width="30px" /></IconContainer>
                            <InfoContainer id="vehicle-2" onClick={this.click("vehicle-2")}>
                                <VehicleMake>Audi</VehicleMake>
                                <VehicleModel>2017 Gray RS7 Sportback</VehicleModel>
                            </InfoContainer>
                            <Selected>{vehicle2 ? <Check /> : null}</Selected>
                        </LI>
                    </UL>
                </VehicleContainer>

                <ButtonContainer>
                    <PrevButton onClick={() => this.props.prev()}>Back</PrevButton>
                    <NextButton className={this.state.selected ? '' : 'inactive-button'} onClick={() => this.props.next()}>Next</NextButton>
                </ButtonContainer>
                
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
    )(ChooseVehicle)
);
