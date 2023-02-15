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
//import {withScriptjs} from "react-google-maps";
//import {Grid} from '@react-ui-org/react-ui';




function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      <BorderExample/>
      <h2>I love/hate this</h2>
      
      


      
      <Map01/>
      
    </div>
  );
}

export default App;
