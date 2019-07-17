import React from 'react';


const DateInput = (props) => {
    return (
        <div>
            <form onSubmit={props.dateHandler}>
                <p>Start Date</p>
                <input type="date"
                min="1995-06-16" />
                <p>End Date</p>
                <input type="date"
                min="1995-06-16" />
                <br />
                <button className='date-submit-btn'>Submit</button>
            </form>
        </div>
    )
}

export default DateInput;