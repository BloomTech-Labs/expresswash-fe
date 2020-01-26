import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


import SelectAddress from "./SelectAddress.js";
import ChooseVehicle from "./ChooseVehicle.js";
import SelectDate from "./SelectDate.js";
import SelectTime from "./SelectTime.js";
// import SelectService from "./WashSteps/SelectService.js";
// import ConfirmWash from "./WashSteps/ConfirmWash.js";




class WashForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                itemName: "",
                itemPrice: "",
                itemTitle: "",
                itemImg: "",
                itemColor: "",
                itemCareType: {},
                itemServices: {},
                itemFinishes: {},
                itemSpecialCareInstructions: ""
            }
        }
    }
    
    ItemOnClick = (itemTitle, itemPrice, itemImgSrc) => {

        let title = document.getElementsByClassName(itemTitle)[0].innerHTML;
        let price = document.getElementsByClassName(itemPrice)[0].innerHTML;
        let newPrice = price.replace(/\$/g,'');
        let img = document.getElementsByClassName(itemImgSrc)[0].src;

        this.setState({
            item: {
                ...this.state.item,
                itemPrice: newPrice,
                itemTitle: title,
                itemImg: img
            }
        })
    }
    

    componentDidMount() {
    }

    render() {
        const {
            currentWeek,
            step, 
            next, 
            prev,
            inputHandler, 
            values,
            mapBoxApiToken, 
            viewport, 
            searchResults, 
            geoCoding, 
            getUserLocation, 
            addressOnClick,
            vehicleOnClick,
            washDateOnClick,
            washTimeOnClick,
        } = this.props;

        switch(step) {
            case 1:
                return(
                    <SelectAddress
                        next={next}
                        prev={prev}
                        values={values}
                        inputHandler={inputHandler}
                        mapBoxApiToken={mapBoxApiToken}
                        viewport={viewport}
                        searchResults={searchResults}
                        geoCoding={geoCoding}
                        getUserLocation={getUserLocation}
                        addressOnClick={addressOnClick}
                    />
                )
            case 2:
                return(
                    <ChooseVehicle
                        next={next}
                        prev={prev}
                        vehicleOnClick={vehicleOnClick}
                    />
                )
            case 3:
                return(
                    <SelectDate 
                        next={next}
                        prev={prev}
                        currentWeek={currentWeek}
                        washDateOnClick={washDateOnClick}
                    />
                )
            case 4:
                return(
                    <SelectTime
                        next={next}
                        prev={prev}
                        washTimeOnClick={washTimeOnClick}
                    />
                )
            case 5:
                return(
                    // <ConfirmWash />
                    <h1>step 5</h1>
                )
            default:
                break;
        }
    }
    
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        loginSuccessful: state.loginSuccessful
    }
}
  
const mapDispatchToProps = {
}
  
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(WashForm)
)