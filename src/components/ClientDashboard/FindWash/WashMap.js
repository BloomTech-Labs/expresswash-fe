import React, { Component } from "react";
import Styled from "styled-components";
import MapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import SimpleBar from "simplebar-react";

import Pin from "./Pin.js";
import UserCircle from "./UserCircle.js";
import WashForm from "./WashSteps/WashForm.js";
import "simplebar/dist/simplebar.min.css";

const TOKEN =
  "pk.eyJ1IjoicXVhbjAwNSIsImEiOiJjazN0a2N3a2YwM3ViM2twdzhkbGphMTZzIn0.OepqB_mymhr1YLSYwNmRSg"; // Set your mapbox token here

const UserInfoContainer = Styled.div`
    margin-bottom: 10px;
`;

const P = Styled.p`
    font-size: 1.3rem;
    font-weight: 500;
`;

const FormInputContainer = Styled.div`
`;

class WashMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggable: true,
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 15,
        bearing: 0,
        pitch: 0,
      },
      marker: {
        latitude: 37.785164,
        longitude: -100,
      },
      events: {},
    };
  }

  _updateViewport = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });
  };

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat,
      },
    });
  }

  _onMarkerDrag = (marker) => {
    this.setState({
      marker: { latitude: marker.lngLat[1], longitude: marker.lngLat[0] },
    });
  };

  _onMarkerDragEnd = (event) => {
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
      },
    });
    this.props.getCurrentAddress(
      this.state.marker.latitude,
      this.state.marker.longitude,
      TOKEN
    );
  };

  _goToViewport = (latitude, longitude) => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        longitude: longitude,
        latitude: latitude,
        zoom: 13,
        transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
        transitionDuration: "auto",
      },
      marker: {
        longitude: longitude,
        latitude: latitude,
      },
    });
  };

  addLines = () => {
    const map = this.refs.map.getMap();
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.48369693756104, 37.83381888486939],
              [116.48348236083984, 37.83317489144141],
            ],
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#888",
        "line-width": 8,
      },
    });
  };

  componentDidMount() {
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: this.props.lat,
        longitude: this.props.long,
      },
      marker: {
        latitude: this.props.lat,
        longitude: this.props.long,
      },
    });
    this.props.getCurrentAddress(this.props.lat, this.props.long, TOKEN);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.lat !== this.props.lat) {
      this._goToViewport(this.props.lat, this.props.long);
    }
  }

  render() {
    const { viewport, marker } = this.state;
    const {
      currentWeek,
      step,
      values,
      searchResults,
      geoCoding,
      getUserLocation,
      addressOnClick,
      vehicleOnClick,
      washDateOnClick,
      washTimeOnClick,
    } = this.props;

    return (
      <>
        <MapGL
          {...viewport}
          ref={"map"}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
        >
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            offsetTop={-20}
            offsetLeft={-10}
            draggable={this.state.draggable}
            onDragStart={this._onMarkerDragStart}
            onDrag={this._onMarkerDrag}
            onDragEnd={this._onMarkerDragEnd}
          >
            {this.state.draggable ? <Pin size={30} /> : <UserCircle />}
          </Marker>
        </MapGL>

        <SimpleBar
          className={
            step === 3 || step === 4
              ? "form-container"
              : "form-container overflow-hidden"
          }
          scrollableNodeProps={{ ref: this.scrollableNodeRef }}
        >
          <UserInfoContainer>
            {this.props.user.profilePicture === "" ? (
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="30" fill="#FE5F55" />
                <text
                  x="50%"
                  y="50%"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  fontSize="40"
                  fill="#fff"
                >
                  {this.props.user.firstName.charAt(0).toUpperCase()}
                </text>
              </svg>
            ) : (
              <img
                src={this.props.user.profilePicture}
                style={{ width: 60 + "%" }}
                alt="Profile Img"
              />
            )}
            <P>
              {step === 1
                ? `Welcome, ${this.props.user.firstName}`
                : step === 2
                ? `Choose your vehicle`
                : step === 3
                ? `Select a Date`
                : step === 4
                ? ` Select a Time`
                : `Confirm your wash`}
            </P>
          </UserInfoContainer>
          <FormInputContainer>
            <WashForm
              washState={this.props.washState}
              next={this.props.next}
              prev={this.props.prev}
              step={step}
              onClick={this.props.addressOnClick}
              inputHandler={this.props.inputHandler}
              values={values}
              viewport={viewport}
              mapBoxApiToken={TOKEN}
              searchResults={searchResults}
              geoCoding={geoCoding}
              getUserLocation={getUserLocation}
              addressOnClick={addressOnClick}
              vehicleOnClick={vehicleOnClick}
              currentWeek={currentWeek}
              washDateOnClick={washDateOnClick}
              washTimeOnClick={washTimeOnClick}
            />
          </FormInputContainer>
        </SimpleBar>
      </>
    );
  }
}

export default WashMap;
