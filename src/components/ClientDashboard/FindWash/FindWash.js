import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Styled from "styled-components";
import moment from "moment";

import WashMap from "./WashMap";
import NavButton from "../HamburgerNavMenu.js/NavButton.js";
import SideDrawer from "../HamburgerNavMenu.js/SideDrawer.js";
import Backdrop from "../HamburgerNavMenu.js/Backdrop.js";
import auth from "../../auth.js";
import { getClientInformation } from "../../../actions/actionTypes";

const MainContainer = Styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NavContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8%;
    width: 100%;
    padding: 0 9.5%;
    background: #FE5F55;
    z-index: 300;
`;

const LogoContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;

    

    @media (min-width: 1800px) { // ##Device = Desktops ##Screen = 1800px to higher resolution desktops //
        height: 100%;
        width: 115px;
        left: 15%;
    }
`;

const NavTitle = Styled.h2`
    color: white;
`;

const MapContainer = Styled.div`
    height: 92%;
    width: 100%;
    position: relative;
`;

class FindWash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAddress: null,
      currentWeek: null,
      selectedAddress: [],
      searchResults: [],
      jobLocation: {
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
      },
      lat: null,
      long: null,
      vehicle: {
        carId: null,
        make: null,
        model: null,
        color: null,
        year: null,
        licensePlate: null,
        category: null,
        size: null,
      },
      jobType: "basic",
      date: null,
      time: null,
      service: null,
      step: 1,
      sideDrawerOpen: false,
      coords: false,
    };
  }

  //Go to the Next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go back to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Get the week
  getCurrentWeek = () => {
    let week = [];
    let today = moment().format("YYYY-MM-DD");
    let time = moment().format("H");

    if (time > 1 && time < 18) {
      for (let i = 0; i <= 6; i++) {
        let first = moment(today).add(i, "d").format("YYYY-MM-DD");
        week.push(first);
      }
      this.setState({
        currentWeek: week,
      });
    } else {
      for (let i = 1; i <= 7; i++) {
        let first = moment(today).add(i, "d").format("YYYY-MM-DD");
        week.push(first);
      }
      this.setState({
        currentWeek: week,
      });
    }
  };

  // format address string to save each part seperately
  formatAddress = (address) => {
    const split = address.split(",");
    let add = split[0].trim();
    let city = split[1].trim();
    let zip = split[2].trim().slice(-5);
    let state = split[2].trim().replace(zip, "");
    this.setState({
      ...this.state,
      jobLocation: {
        address: add,
        city: city,
        state: state,
        zip: zip,
      },
    });
  };

  // original user location
  getUserLocation = (address, long, lat) => {
    this.formatAddress(address);
    this.setState({
      ...this.state,
      selectedAddress: address,
      lat: lat,
      long: long,
    });
  };

  // get current address
  getCurrentAddress = async (lat, long, token) => {
    try {
      const fetchLocation = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${token}`
      );
      const response = await fetchLocation.json();
      this.setState({
        ...this.state,
        currentAddress: response.features[0].place_name,
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  // gets the searched location
  geoCoding = async (address, token) => {
    let country = "us";
    try {
      const FetchData = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?country=${country}&limit=2&autocomplete=true&access_token=${token}`
      );
      const response = await FetchData.json();
      if (address !== "") {
        this.setState({
          searchResults: response.features,
        });
      } else {
        this.setState({
          searchResults: [],
        });
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  // gets the clicked address location
  addressOnClick = async (address, token) => {
    this.formatAddress(address);
    let country = "us";
    try {
      const getLocation = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?country=${country}&limit=1&autocomplete=true&access_token=${token}`
      );
      const response = await getLocation.json();

      this.setState({
        ...this.state,
        selectedAddress: response.features[0].matching_place_name,
        lat: response.features[0].geometry.coordinates[1],
        long: response.features[0].geometry.coordinates[0],
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  // gets the chosen vehicle
  vehicleOnClick = (car) => {
    this.setState({
      ...this.state,
      vehicle: {
        carId: car.carId,
        make: car.make,
        model: car.model,
        color: car.color,
        year: car.year,
        licensePlate: car.licensePlate,
        category: car.category,
        size: car.size,
      },
    });
  };

  // Sets the clients wash date
  washDateOnClick = (date) => {
    this.setState({
      ...this.state,
      date: date,
    });
  };

  // Sets the clients Wash time
  washTimeOnClick = (time) => {
    this.setState({
      ...this.state,
      time: time,
    });
  };

  serviceOnClick = (event) => {
    event.preventDefault();
  };

  //Logout
  logout = (evt) => {
    evt.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("id");
    auth.logout(() => {
      this.props.history.push("/login");
    });
  };

  //Nav Toggle
  NavToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentWillMount() {
    // update userReducer with most current user info
    this.props.getClientInformation(
      this.props.user.id || localStorage.getItem("id")
    );
    this.getCurrentWeek();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        this.setState({ coords: true });
      });
    } else {
      alert("Please refresh and enable your location to start your wash");
    }
  }

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop clickHandler={this.backdropClickHandler} />;
    }

    if (this.state.coords === false) {
      return null;
    } else {
      const { step } = this.state;

      const {
        currentWeek,
        currentAddress,
        address,
        selectedAddress,
        lat,
        long,
        searchResults,
        vehicle,
        date,
        time,
        service,
      } = this.state;

      const values = {
        currentAddress,
        address,
        selectedAddress,
        lat,
        long,
        vehicle,
        date,
        time,
        service,
      };

      return (
        <MainContainer>
          <NavContainer className="nav-container">
            <LogoContainer className="logo-container">
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavTitle>ExpressWash.us</NavTitle>
              </Link>
            </LogoContainer>
            <NavButton clickHandler={this.NavToggleClickHandler} />
          </NavContainer>
          <MapContainer>
            <SideDrawer logout={this.logout} show={this.state.sideDrawerOpen} />
            {backDrop}
            <WashMap
              getUserLocation={this.getUserLocation}
              long={this.state.long}
              lat={this.state.lat}
              step={step}
              values={values}
              user={this.props.user}
              inputHandler={this.inputHandler}
              onClick={this.addressOnClick}
              next={this.nextStep}
              prev={this.prevStep}
              searchResults={searchResults}
              getCurrentAddress={this.getCurrentAddress}
              geoCoding={this.geoCoding}
              addressOnClick={this.addressOnClick}
              vehicleOnClick={this.vehicleOnClick}
              currentWeek={currentWeek}
              washDateOnClick={this.washDateOnClick}
              washTimeOnClick={this.washTimeOnClick}
              washState={this.state}
            />
          </MapContainer>
        </MainContainer>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  getClientInformation,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FindWash)
);
