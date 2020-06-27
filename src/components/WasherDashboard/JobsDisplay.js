import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DB_URL, getClientInformation } from '../../actions/actionTypes.js';
import axios from 'axios';

class JobsDisplay extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitJob = this.handleSubmitJob.bind(this);

    this.state = {
      jobs: [],
      completedJobs: [],
    };
  }

  handleSubmitJob = (jobId, jobClientId) => {
    axios
      .put(`${DB_URL}/jobs/job/${jobId}`, {
        completed: true,
      })
      .then((res) => {
        alert(
          'Job Successfully Completed! Your payment will show up in your account soon.'
        );
      })
      .catch((err) => console.log(err));
    this.getAvailableJobs();
    this.postEmailData(jobClientId);
  };

  postEmailData = (jobClientId) => {
    axios
      .post(`${DB_URL}/emails/send-email`, {
        clientId: jobClientId,
      })
      .catch((err) => console.log(err));
  };
  getAvailableJobs = () => {
    axios
      .get(`${DB_URL}/jobs/`)
      .then((res) => {
        this.setState({
          jobs: res.data.filter(
            (job) => job.washerId == localStorage.getItem('washerId')
          ),
          completedJobs: res.data.filter(
            (job) =>
              job.washerId == localStorage.getItem('washerId') &&
              job.completed == true
          ),
          isGettingJobs: false,
        });
      })
      .catch((err) => console.log(err));
  };

  componentWillMount() {
    this.props.getClientInformation(
      this.props.user.id || localStorage.getItem('id')
    );
  }

  componentDidMount() {
    this.getAvailableJobs();
  }

  render() {
    return (
      <div>
        <div>
          <br />
          <h2 style={{ fontWeight: 'bold' }}>Accepted Jobs</h2>
          <button
            onClick={() => {
              this.getAvailableJobs();
            }}
          >
            Refresh
          </button>
          <hr />
        </div>
        {this.isGettingJobs === 'true' ? (
          <h3>Loading Jobs...</h3>
        ) : (
          <div>
            {this.state.jobs &&
              this.state.jobs.map((job) => {
                return (
                  <div key={job.jobId}>
                    <h4>Job Address:</h4>
                    <p>{job.washAddress}</p>
                    <h4>Job Date and Time:</h4>
                    <p>{job.timeRequested}</p>
                    <h4>Payment Before Tip:</h4>
                    <p>$40.00</p>

                    <button
                      onClick={() => {
                        alert('Still need to add this feature!');
                      }}
                    >
                      Upload Before Photo
                    </button>
                    <button
                      onClick={() => {
                        alert('Still need to add this feature!');
                      }}
                    >
                      Upload After Photo
                    </button>
                    <br />
                    <button
                      onClick={() => {
                        this.handleSubmitJob(job.jobId, job.clientId);
                      }}
                    >
                      Mark Job Completed
                    </button>
                    <hr />
                  </div>
                );
              })}
          </div>
        )}
        <div>
          <h2 style={{ fontWeight: 'bold' }}>Completed Jobs</h2>

          <hr />
        </div>
        {this.state.jobs.reverse().map((job) => {
          return (
            <div key={job.jobId}>
              <h4>Job Address:</h4>
              <p>{job.washAddress}</p>
              <h4>Job Date and Time:</h4>
              <p>{job.timeRequested}</p>
              <h4>Payment Before Tip:</h4>
              <p>$40.00</p>
              <hr />
            </div>
          );
        })}
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
