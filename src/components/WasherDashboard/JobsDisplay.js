import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { DB_URL, getClientInformation } from "../../actions/actionTypes.js";
import axios from "axios";

class JobsDisplay extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitJob = this.handleSubmitJob.bind(this);

    this.state = {
      jobs: [],
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
      .get(
        `${DB_URL}/jobs/available/${
          this.props.user.id || localStorage.getItem("id")
        }`
      )
      .then((res) => {
        // console.log(res.data)
        this.setState({ jobs: res.data, isGettingJobs: false });
      })
      .catch((err) => console.log(err));
  };

  componentWillMount() {
    this.props.getClientInformation(
      this.props.user.id || localStorage.getItem("id")
    );
  }

  componentDidMount() {
    this.getAvailableJobs();
  }

  render() {
    console.log("JOBS USER PROPS", this.props.user);
    console.log("JOBS STATE", this.state);
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
                  <h4>Payment Before Tip:</h4>
                  <p>$40.00</p>
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
        <button
          onClick={() => {
            this.getAvailableJobs();
          }}
        >
          Refresh Job Listings
        </button>
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
  getClientInformation,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobsDisplay)
);
