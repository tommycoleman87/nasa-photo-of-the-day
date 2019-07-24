import React from 'react';
import {Button} from './styles/styles';
import moment from 'moment/moment.js';

const maxDate = moment().format('YYYY-MM-DD', new Date());

const DateInput = (props) => {
   
    return (
        <div>
          
            <h3>Pick a date range to display</h3>
            <form onSubmit={props.dateHandler}>
                <p>Start Date</p>
                <input type="date"
                min="1995-06-16" 
                max={maxDate}/>
                <p style={{marginTop: '10px'}}>End Date</p>
                <input type="date"
                min="1995-06-16"
                max={maxDate}/>
                <br />
                <Button className='date-submit-btn'>Submit</Button>
            </form>
           
        </div>
    )
}

export default DateInput;