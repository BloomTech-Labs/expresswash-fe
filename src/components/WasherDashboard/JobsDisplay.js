import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { addACar } from '../../actions/actionTypes.js';
import axios from "axios";

class JobsDisplay extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitJob = this.handleSubmitJob.bind(this);

    this.state = {
      jobs: [],
      isGettingJobs: true,
    };
  }

  handleSubmitJob = (jobId) => {
    const id = localStorage.getItem("id");
    axios
      .put("https://pt6-wowo.herokuapp.com/jobs/selectjob", {
        jobId: jobId,
        id: id,
      })
      .then((res) => {
        // console.log(res.data)
        alert("Job Successfully Accepted.  See you there!");
      })
      .catch((err) => console.log(err));
  };

  getAvailableJobs = () => {
    axios
      .get("https://pt6-wowo.herokuapp.com/jobs/available")
      .then((res) => {
        // console.log(res.data)
        this.setState({ jobs: res.data, isGettingJobs: false });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getAvailableJobs();
  }

  render() {
    return (
      <div>
        {this.isGettingJobs === "true" ? (
          <h3>Loading Jobs...</h3>
        ) : (
          <div>
            {this.state.jobs.map((job) => {
              return (
                <div key={job.jobId}>
                  <h4>Job Address:</h4>
                  <p>{job.washAddress}</p>
                  <h4>Job Date and Time:</h4>
                  <p>{job.creationDate}</p>
                  <h4>Job Vehicle:</h4>
                  <p>
                    {job.color} {job.make} {job.model} with License Plate:{" "}
                    {job.licensePlate}
                  </p>
                  <h4>Payment Before Tip:</h4>
                  <p>$20.00</p>
                  <button
                    onClick={() => {
                      this.handleSubmitJob(job.jobId);
                    }}
                  >
                    Agree to Work Job
                  </button>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
        <br />
        <button onClick={this.getAvailableJobs()}>Refresh Job Listings</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobsDisplay)
);
