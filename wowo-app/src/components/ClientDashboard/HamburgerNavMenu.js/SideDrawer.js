import React from 'react';
import Styled from "styled-components";
import { Link } from 'react-router-dom';

import './SideDrawer.css';


const SideDrawerNav = Styled.nav`
    height: 92%;
    background: #ccc;
    box-shadow: -1px 0px 20px black;
    position: fixed;
    top: 8%;
    right: 0;
    width: 60%;
    max-width: 300px;
    z-index: 200;
`;

const NavList = Styled.ul`
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
`;

const ListItem = Styled.li`
    padding: 10px 0;
    font-size:20px;
    color: black;
    cursor: pointer;
    :hover{
        text-decoration: underline
    }
    :active {
        color: #00A8C5
    }
`;

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }
    return(
        <SideDrawerNav className={drawerClasses}>
            <NavList>
                <Link to="/clientDash/navigation">
                    <ListItem>Account Details</ListItem>
                </Link>
                <Link to="/clientDash/payments">
                    <ListItem>Payment Options</ListItem>
                </Link>
                <Link to="/clientDash/washes">
                    <ListItem>Your Washes</ListItem>
                </Link>
                <ListItem onClick={props.logout}>Sign Out</ListItem>
            </NavList>
        </SideDrawerNav>
    );
};

export default sideDrawer;