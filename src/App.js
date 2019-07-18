import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import ApodHeader from './components/ApodHeader';
import Display from './components/Display';
import DateInput from './components/DateInput';
import moment from 'moment/moment.js';

const date = new Date();
const newDate = moment().format(`YYYY-MM-DD`,`${date}`);


function App() {
  const [spaceState, setSpaceState] = useState([])
  const [firstDate, setFirstDate] = useState(`${newDate}`);
  const [secondDate, setSecondDate] = useState(`${newDate}`);


 useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?start_date=${firstDate}&end_date=${secondDate}&api_key=ntzXMWjMGFouRqwuj1ub7Bv9eMSgbncydBcaFipg`)
  .then(data => {
    setSpaceState(data.data)
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
}, [firstDate, secondDate])

const dateInputHandler = (event) => {
  event.preventDefault();
  setFirstDate(event.target.childNodes[1].value);
  setSecondDate(`${event.target.childNodes[3].value}`);
  console.log(firstDate, secondDate);
}


  return (
    <div className="App" style={{background: '#f2f2f2'}}>
      <ApodHeader />
      <DateInput dateHandler={(event) => dateInputHandler(event)}/>
      <Display images={spaceState}/>
    </div>
  );
}

export default App;
