import React from 'react';
import Styled from "styled-components";

const NavToggleButton = Styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 60px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
    box-sizing: border-box;
    :focus {
       outline:none; 
    }
`;

const ToggleButtonLine = Styled.div`
    width: 35px;
    height: 2px;
    background: white;
`;

const navButton = props => (
    <NavToggleButton onClick={props.clickHandler}>
        <ToggleButtonLine />
        <ToggleButtonLine />
        <ToggleButtonLine />
    </NavToggleButton>
);

export default navButton;