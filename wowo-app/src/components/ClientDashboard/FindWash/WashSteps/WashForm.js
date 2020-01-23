import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


import SelectAddress from "./WashSteps/SelectAddress.js";
import ChooseVehicle from "./WashSteps/ChooseVehicle.js";
import ScheduleWash from "./WashSteps/ScheduleWash.js";
import SelectService from "./WashSteps/SelectService.js";
import ConfirmWash from "./WashSteps/ConfirmWash.js";




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
        const { step, nextStep, prevStep  } = this.props;
        const { firstDay, secondDay, thirdDay, fourthDay, fifthDay, sixthDay, seventhDay } = this.props.pickupDate;
        switch(step) {
            case 1:
                return(
                    <SelectAddress
                        next={nextStep}
                        prev={prevStep}
                        onClick={this.addressOnClick}
                        inputHandler={this.inputHandler}
                        values={values}
                    />
                )
            case 2:
                return(
                    <ChooseVehicle
                        next={nextStep}
                        prev={prevStep}
                        onClick={this.vehicleOnClick}
                        inputHandler={this.inputHandler}
                        values={values} 
                    />
                )
            case 3:
                return(
                    <ScheduleWash 
                        next={nextStep}
                        prev={prevStep}
                        inputHandler={this.inputHandler}
                        values={values}
                    />
                )
            case 4:
                return(
                    <SelectService
                        next={nextStep}
                        prev={prevStep}
                        onClick={this.serviceOnClick}
                        inputHandler={this.inputHandler}
                        values={values}
                    />
                )
            case 5:
                return(
                    <ConfirmWash />
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
    logOut
}
  
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(WashForm)
)