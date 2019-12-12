import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Styled from "styled-components";

import WashMap from "./WashMap";



const MainContainer = Styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MenuContainer = Styled.div`
    height: 8%;
    width: 100%;
    background: #00A8C5;
`;

const MapContainer = Styled.div`
    height: 86%;
    width: 100%;
    position: relative;
`;

const FormContainer = Styled.div`
    position: absolute;
    height: 400px;
    width: 300px;
    background: #ffffff;
    border: 1px solid grey;
    bottom: 10%;
    left 5%; 
`

const FooterContainer = Styled.div`
    height: 6%;
    width: 100%;
    background: #000000;
`;




class FindWash extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            show: false
        };
    }
  
    inputHandler = event => {
      event.preventDefault();
  
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value
      });
    };
  
    showHandler = event => {
      event.preventDefault();
      if (this.state.show === false) {
        this.setState({ show: true });
      } else {
        this.setState({ show: false });
      }
    };
  
    handleSubmit = event => {
      event.preventDefault();
  
      const { email, password } = this.state;
      this.props
        .loginUser(email, password)
        .then(() => {
          this.props.history.push("/userDash");
        })
        .catch(err => {
          throw new Error(err);
        });
    };
  
    render() {
        return (
            <MainContainer>
                <MenuContainer>
                </MenuContainer>
        
                <MapContainer>
                    <WashMap />
                    <FormContainer>
                    </FormContainer>
                </MapContainer>

                <FooterContainer>
                </FooterContainer>
            </MainContainer>
        );
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
    )(FindWash)
);