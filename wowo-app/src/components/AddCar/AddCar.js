import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addACar } from '../../actions/actionTypes.js'; 

class AddCar extends Component {
    constructor() {
        super()
        this.state = {
            make: '',
            model:'',
        }
    }

    handleChange = (evt) => {
        evt.preventDefault()
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const { username, password } = this.state

        this.props.addACar(id, make, model)
            .then(() => {
                this.props.history.push("/businessdashboard")
            })
            .catch((err) => { console.error(err) })
    }

    render() {
        const { make, model } = this.state
        const { isLoading, } = this.props
        return (
            <div>
                <h3>Add a Car</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* {errorMessage && <p className="error">{errorMessage}</p>} */}
                    <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} /><br/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} /><br/>
                    {isLoading
                        ? <p>Logging in...</p>
                        : <button type="submit">Log In</button>}
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};
  
const mapDispatchToProps = {
};
  
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AddCar)
);