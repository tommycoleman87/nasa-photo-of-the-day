import React from 'react';
import {Button} from './styles/styles';

const DateInput = (props) => {
   
    return (
        <div>
          
            <h3>Pick a date range to display</h3>
            <form onSubmit={props.dateHandler}>
                <p>Start Date</p>
                <input type="date"
                min="1995-06-16" />
                <p>End Date</p>
                <input type="date"
                min="1995-06-16" />
                <br />
                <Button className='date-submit-btn'>Submit</Button>
            </form>
           
        </div>
    )
}

export default DateInput;