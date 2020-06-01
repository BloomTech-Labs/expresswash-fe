import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { DB_URL, getClientInformation } from "../../actions/actionTypes.js";
import MapGL, {
  Marker,
  Popup,
  Source,
  Layer,
  NavigationControl,
} from "react-map-gl";
import axios from "axios";

import Pin from "../ClientDashboard/FindWash/Pin.js";
import UserCircle from "../ClientDashboard/FindWash/UserCircle.js";

const TOKEN =
  "pk.eyJ1IjoicXVhbjAwNSIsImEiOiJjazN0a2N3a2YwM3ViM2twdzhkbGphMTZzIn0.OepqB_mymhr1YLSYwNmRSg"; // Set your mapbox token here

class WashMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggable: false,
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
      jobs: [],
    };
  }

  getAvailableJobs = () => {
    axios
      .get(`${DB_URL}/jobs/available/${localStorage.getItem("id")}`)
      .then((res) => {
        // console.log(res.data)
        this.setState({ jobs: res.data });
      })
      .catch((err) => console.log(err));
  };

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat,
      },
    });
  }

  _onMarkerDragEnd = (event) => {
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
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
    if (navigator.geolocation) {
      this.getAvailableJobs();
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          viewport: {
            ...this.state.viewport,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          marker: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          },
        });
      });
    } else {
      alert("Please refresh and enable your location to start your wash");
    }
  }

  render() {
    const { viewport, marker } = this.state;
    console.log(this.state.jobs);

    return (
      <MapGL
        {...viewport}
        ref={"map"}
        width="100%"
        height="100%"
        zoom={12}
        mapStyle="mapbox://styles/mapbox/basic-v8"
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
        {this.state.jobs &&
          this.state.jobs.map((job) => (
            <Marker
              key={job.jobId}
              latitude={Number(job.jobLocationLat)}
              longitude={Number(job.jobLocationLon)}
            >
              <button>
                <Pin size={25} />
              </button>
            </Marker>
          ))}
      </MapGL>
    );
  }
}

export default WashMap;
