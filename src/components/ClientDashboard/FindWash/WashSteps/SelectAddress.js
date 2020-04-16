import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { MDBInput } from "mdbreact";

import Styled from "styled-components";
import HomeIcon from "./../../../../images/HomeIcon.js";
import WorkIcon from "./../../../../images/WorkIcon.js";
import CurrentIcon from "./../../../../images/CurrentIcon.js";

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
    padding: 5px 15px;
    width: 100%;
`;

const AddressContainer = Styled.div`
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
    justify-content: flex-start;
    align-items: center;
    padding: 15px 15px;
    cursor: pointer;

    &:hover {
        background: #a6e1eb;
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

const AddressName = Styled.p`
    text-align: left;
    font-size: 1.15rem;
    font-weight: 500;
    margin: 0;
`

const AddressInfo = Styled.p`
    text-align: left;
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
`

const SearchContainer = Styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const ResultsContainer = Styled.div`
    position: absolute;
    background: #ececec;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    top: 80px;
`

const Results = Styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const ResultLi = Styled.li`
    padding: 15px 10px;
    cursor: pointer;
    text-align: left;

    &:hover {
        background: #a6e1eb;
    }
`


class SelectAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            hide: false
        };
    }

    // Address click handler
    click = event => {
        event.preventDefault();
        let token = this.props.mapBoxApiToken
        let address = event.target.innerText;
        this.props.addressOnClick(address, token);
        this.props.next();
    }

    // Current address click
    currentClick = (address, lat, long) => event => {
        event.preventDefault();
        this.props.getUserLocation(address, long, lat)
        this.props.next();
    }

    // Search result click handler
    resultClick = (lat, long, address) => {
        this.props.getUserLocation(address, lat, long)
        this.setState({
            hide: true
        });
        this.props.next();
    }

    // Search and get locations
    inputHandler = event => {
        let token = this.props.mapBoxApiToken
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        this.props.geoCoding(this.state.address, token)
    };






    render() {
        const { values, viewport, searchResults, mapBoxApiToken } = this.props;

        return (
            <Container>
                <Form> 
                    <SearchContainer>
                        <MDBInput
                            label="Enter or choose your car location"
                            autoCapitalize="off"
                            autoCorrect="off"
                            autoComplete="off"
                            maxLength="75"
                            type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.inputHandler}
                        />

                        {this.state.address !== ""
                            ?
                                <ResultsContainer className={this.state.hide ? "hidden" : null}>
                                    <Results>
                                        {searchResults.map((result, i) => (
                                            <ResultLi key={i} onClick={() => this.resultClick(result.geometry.coordinates[0], result.geometry.coordinates[1])}>{result.place_name}</ResultLi>
                                        ))}
                                    </Results>
                                </ResultsContainer>
                            :
                                (this.state.address === "" 
                                    ?
                                            null
                                    :
                                            null
                                )
                        }
                    </SearchContainer>
                </Form>

                <AddressContainer>
                    {/* {this.props.addresses > 0 ?
                        this.props.addresses.map(address => {  
                        })
                    :
                        <h4>Click here to add a address to your profile</h4>
                    } */}

                    <UL>
                        <LI>
                            <IconContainer><CurrentIcon width="30px" fill2="#ffffff" /></IconContainer>
                            <InfoContainer>
                                <AddressName>Current</AddressName>
                                <AddressInfo onClick={this.currentClick(values.currentAddress, values.lat, values.long)}>{values.currentAddress}</AddressInfo>
                            </InfoContainer>
                        </LI>
                        <LI>
                            <IconContainer><WorkIcon width="30px" fill2="#ffffff" /></IconContainer>
                            <InfoContainer>
                                <AddressName>Work</AddressName>
                                <AddressInfo onClick={this.click}>Phoenix Municipal Court</AddressInfo>
                            </InfoContainer>
                        </LI>
                        <LI>
                            <IconContainer><HomeIcon width="30px" fill2="#ffffff" /></IconContainer>
                            <InfoContainer>
                                <AddressName>Home</AddressName>
                                <AddressInfo onClick={this.click}>15619 W. Roma ave, Goodyear, Arizona</AddressInfo>
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
