import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Display from './components/Display';

function App() {
  const [spaceState, setSpaceState] = useState([])
  const [dates, setDates] = useState([])
  console.log(spaceState)
  useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
  .then(data => {
    setSpaceState(data.data)
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
}, [dates])
  return (
    <div className="App">
      <Display images={spaceState}/>
    </div>
  );
}

export default App;
