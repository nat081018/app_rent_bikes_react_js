import React from 'react';
import './App.css';

import ListCyties from "./components/list_cyties/ListCyties";
import Stations from "./components/stations/Stations"


const  getCyties  = async () => {
  let allCyties = []
  const cytiesInfo = await fetch("https://api.citybik.es/v2/networks?fields=id,company")
  .then((response) => response.json())
  .then((res) => allCyties = res)
  
  return console.log(allCyties)
}
getCyties()

function App() {

  return (
    <div className="App">
      <h1>Rent bikes</h1>
      <div className="bikes__info-wrapper">
        {

        }
        <ListCyties />
        <Stations/>
      </div>
    </div>
  );
}

export default App;
