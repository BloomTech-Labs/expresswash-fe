import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Styled from "styled-components";
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
`;

const LI = Styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 3%;
    cursor: pointer;

    &:hover {
        background: #80d4e2;
    }
`;

const IconContainer = Styled.div`
    margin-right: 10px;
`;

const InfoContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Selected = Styled.div``;

const VehicleMake = Styled.p`
    font-size: 1.15rem;
    font-weight: 500;
    margin: 0;
`;

const VehicleModel = Styled.p`
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
`;

const ButtonContainer = Styled.div`
    position: absolute;
    bottom: 0%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 90%;
`;

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
`;

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
`;

class ChooseVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCar: {},
      selected: false,
    };
  }

  // vehicle click handler
  click = (car) => {
    this.setState({ selectedCar: car, selected: !this.state.selected });
    this.props.vehicleOnClick(car);
  };

  render() {
    return (
      <Container>
        <VehicleContainer>
          {this.props.cars &&
            this.props.cars.map((car) => (
              <UL key={car.carId}>
                <LI key={car.carId} onClick={() => this.click(car)}>
                  <InfoContainer key={car.carId}>
                    <VehicleMake>{car.make}</VehicleMake>
                    <VehicleModel>
                      {car.year} {car.color} {car.model}
                    </VehicleModel>
                  </InfoContainer>
                  <Selected>
                    {this.state.selected &&
                    this.state.selectedCar.carId === car.carId ? (
                      <Check />
                    ) : null}
                  </Selected>
                </LI>
              </UL>
            ))}
          <Link to="/clientDash/vehicles">
            <button>Add a vehicle</button>
          </Link>
        </VehicleContainer>

        <ButtonContainer>
          <PrevButton data-testid="back" onClick={() => this.props.prev()}>
            Back
          </PrevButton>
          <NextButton
            data-testid="nextbtn"
            className={this.state.selected ? "" : "inactive-button"}
            onClick={() => this.props.next()}
          >
            Next
          </NextButton>
        </ButtonContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cars: state.userReducer.user.cars,
  };
};

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChooseVehicle)
);
