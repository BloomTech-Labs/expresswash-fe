import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import {SingleDatePicker} from 'react-dates'


class DayPicker extends Component {
    constructor(props){
        super(props);
        this.state={
        startDate:null,
        endDate:null}
    }
    state = {  }
    render() { 
        return ( 
            <div className='daypicker'>
                <SingleDatePicker
                showDefaultInputIcon
                showClearDate
                reopenPickerOnClearDate
                orientation="vertical"
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
                />
            </div>


         );
    }
}
 
export default DayPicker;
