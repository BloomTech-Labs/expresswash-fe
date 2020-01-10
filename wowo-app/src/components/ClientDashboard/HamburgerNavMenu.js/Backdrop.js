import React from 'react';
import Styled from "styled-components";


const Backdrop = Styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 100;
`;

const backdrop = props => (
    <Backdrop className='backdrop' onClick={props.clickHandler}/>
);

export default backdrop;