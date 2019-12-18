import React, { useState } from 'react';

import DateFnsUtils from '@date-io/date-fns'
import {DateTimePicker,MuiPickersUtilsProvider} from '@material-ui/pickers' 

import Styled from "styled-components";
import WashMap2 from './WashMap2';


const MenuContainer = Styled.div`
    height: 8%;
    width: 100%;
    background: #00A8C5;
`;

const MainContainer = Styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const FooterContainer = Styled.div`
    height: 6%;
    width: 100%;
    background: #000000;
`;



function ScheduleWash2(){
    const [selectedDate,handleDateChange] = useState(new Date());
    const [viewport] = useState();


    return(
    <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/* <MainContainer> */}
            {/* <MenuContainer/> */}
            
        
            

        
        <DateTimePicker value={selectedDate} onChange={handleDateChange}
        />
        
        
        <WashMap2/>
        
        {/* <FooterContainer> */}
                {/* </FooterContainer> */}
        {/* </MainContainer> */}
        </MuiPickersUtilsProvider>
    </>
        
    )
}

export default ScheduleWash2;