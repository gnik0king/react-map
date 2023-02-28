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
import BorderExample from './Components/LocationPin';
import Map01 from './Components/DirectionsTest';
import LocationList from './Components/Locations';
import { Displayed } from './Components/DisplayAddresses';
//import {withScriptjs} from "react-google-maps";
//import {Grid} from '@react-ui-org/react-ui';




function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      
      <h2>Map</h2>
      

      <div class="wrapper">
        <div class="one">
          <Displayed/>
        </div>
        <div class="two">
          <GoogleMapComponent/>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
