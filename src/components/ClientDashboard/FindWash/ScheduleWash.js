import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import TimePicker from "react-time-picker";
// import TimePicker from 'react-time-picker/dist/entry.nostyle'
import ReactMapGL from "react-map-gl";

class DayPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      time: "10:00",
      viewport: {
        width: 700,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 12
      }
    };
  }

  onChange = time => this.setState({ time });

  render() {
    return (
      <div className="daypicker">
        <SingleDatePicker
          showDefaultInputIcon
          showClearDate
          reopenPickerOnClearDate
          orientation="vertical"
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
        />
        <TimePicker onChange={this.onChange} value={this.state.time} />
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken="pk.eyJ1IjoicXVhbjAwNSIsImEiOiJjazN0a2N3a2YwM3ViM2twdzhkbGphMTZzIn0.OepqB_mymhr1YLSYwNmRSg"
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </div>
    );
  }
}

export default DayPicker;
