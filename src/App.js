import logo from './logo.svg';
import './App.css';
//import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import React, {Component} from 'react';
//import GMap from './Components/Map';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleMapComponent from './Components/GoogleMapComponent';




function App() {
  return (
    <div className="App">
      <h2>How to Add Google Maps in React JS App</h2>
      <GoogleMapComponent/>
    </div>
  );
}

export default App;
