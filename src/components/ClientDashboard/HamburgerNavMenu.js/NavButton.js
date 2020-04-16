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
    padding: 5px 0;
    box-sizing: border-box;
    :focus {
       outline:none; 
    }
`;

const ToggleButtonLine = Styled.div`
    width: 40px;
    height: 3px;
    background: white;
    border-radius: 2px
`;

const navButton = props => (
    <NavToggleButton onClick={props.clickHandler}>
        <ToggleButtonLine />
        <ToggleButtonLine />
        <ToggleButtonLine />
    </NavToggleButton>
);

export default navButton;