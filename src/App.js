import logo from './logo.svg';
import './App.css';
//import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import React, {Component} from 'react';
//import GMap from './Components/Map';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleMapComponent from './Components/GoogleMapComponent';
//import BrandExample from './Components/NavBar';
import BasicExample from './Components/NavBar';
import NavScrollExample from './Components/NavBar';




function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      <h2>Testing</h2>
      <GoogleMapComponent/>
    </div>
  );
}

export default App;
