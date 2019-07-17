import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './components/Header';
import Display from './components/Display';
import DateInput from './components/DateInput';

function App() {
  const [spaceState, setSpaceState] = useState([])
  const [firstDate, setFirstDate] = useState('2015-09-07')
  const [secondDate, setSecondDate] = useState('2015-09-08');
 

 useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?start_date=${firstDate}&end_date=${secondDate}&api_key=ntzXMWjMGFouRqwuj1ub7Bv9eMSgbncydBcaFipg`)
  .then(data => {
    setSpaceState(data.data)
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
}, [firstDate, secondDate])

const dateInputHandler = (event) => {
  event.preventDefault();
  console.log(event.target)
  setFirstDate(event.target.childNodes[1].value);
  setSecondDate(`${event.target.childNodes[3].value}`);
  console.log(firstDate, secondDate);
}


  return (
    <div className="App">
      <Header />
      <DateInput dateHandler={(event) => dateInputHandler(event)}/>
      <Display images={spaceState}/>
    </div>
  );
}

export default App;
