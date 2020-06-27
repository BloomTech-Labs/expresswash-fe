import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { scheduleJob } from '../../../../actions/actionTypes.js';
import Styled from 'styled-components';

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
    margin: 1.2% auto;

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
    margin: 1.2% auto;
`;

class ConfirmationJobCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobLocation: {
        address: '',
        city: '',
        state: '',
        zip: '',
      },
    };
  }

  // format address string to save each part seperately
  formatAddress = (address) => {
    const split = address.split(',');
    let add = split[0].trim();
    let city = split[1].trim();
    let zip = split[2].trim().slice(-5);
    let state = split[2].trim().replace(zip, '');
    this.setState({
      jobLocation: {
        address: add,
        city: city,
        state: state,
        zip: zip,
      },
    });
  };

  handleSchedule = () => {
    const { washState, user } = this.props;
    const { jobLocation } = this.state;
    const jobInfo = {
      washAddress: washState.selectedAddress,
      scheduled: true,
      completed: false,
      paid: false,
      clientId: user.id,
      carId: washState.vehicle.carId,
      address: jobLocation.address,
      city: jobLocation.city,
      state: jobLocation.state,
      zip: jobLocation.zip,
      notes: '',
      jobType: 'basic',
      timeRequested: `${washState.time}, ${washState.date}`,
    };
    this.props.scheduleJob(jobInfo);
    this.props.history.push('/clientDash/washes');
  };

  componentDidMount() {
    if (this.props.washState.selectedAddress) {
      this.formatAddress(this.props.washState.selectedAddress);
    }
  }

  render() {
    const { date, selectedAddress, vehicle, time } = this.props.washState;
    return (
      <div>
        <h4>
          <strong>Date:</strong> {date}
          <br />
          <strong>Time:</strong> {time} <br />
          <strong>Location:</strong> {selectedAddress}
          <br />
          <strong>Category:</strong> {vehicle.category} - {vehicle.size}
          <br />
          <strong>For Car:</strong> {vehicle.year} {vehicle.make}{' '}
          {vehicle.model} <br />
          <strong>Color:</strong> {vehicle.color} <br />
          <strong>License Plate:</strong> {vehicle.licensePlate} <br />
          <strong>Cost:</strong>$40.00
          <br />
          <NextButton onClick={() => this.handleSchedule()}>
            Schedule
          </NextButton>
          <PrevButton data-testid="prev" onClick={() => this.props.prev()}>
            Back
          </PrevButton>
        </h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  scheduleJob,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ConfirmationJobCreation)
);
