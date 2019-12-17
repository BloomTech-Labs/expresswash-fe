import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Styled from "styled-components";

import WashMap from "./WashMap";
import WowoWordLogo from '../../../images/WowoWordLogo.js'
import MenuIcon from '../../../images/MenuIcon.js'



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

const MenuInner = Styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`

const LogoContainer = Styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    left: 10%;

    @media (min-width: 1800px) { // ##Device = Desktops ##Screen = 1800px to higher resolution desktops //
        height: 100%;
        width: 115px;
        left: 15%;
    }
`

const MenuButtonContainer = Styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    right: 10%;
    cursor: pointer;

    @media (min-width: 1800px) { // ##Device = Desktops ##Screen = 1800px to higher resolution desktops //
        height: 100%;
        width: 40px;
        right: 15%;
    }
`

const MapContainer = Styled.div`
    height: 86%;
    width: 100%;
    position: relative;
`

const FormContainer = Styled.div`
    position: absolute;
    height: 500px;
    width: 350px;
    background: #ffffff;
    border: 1px solid grey;
    bottom: 10%;
    left 10%;
    
    @media (min-width: 1800px) { // ##Device = Desktops ##Screen = 1800px to higher resolution desktops //
        height: 600px;
        bottom: 12%;
        left: 15%;
    }

    @media (max-width: 768px) {
        width: 100%
        bottom: 0%;
        left 0%;
    }
    
    @media (max-width: 768px) {
        width: 100%
        bottom: 0%;
        left 0%;
    }
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
                    <MenuInner>
                        <LogoContainer>
                            <WowoWordLogo
                                width="100%"
                            />
                        </LogoContainer>
                        <MenuButtonContainer>
                            <MenuIcon />
                        </MenuButtonContainer>
                    </MenuInner>
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