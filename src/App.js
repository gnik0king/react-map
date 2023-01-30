import logo from './logo.svg';
import './App.css';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import React, {Component} from 'react';
import GMap from './Components/Map';

const mapStyles ={
  width:'75%',
  height: '75%',
  margin: 'auto'
};


export class MapContainer extends Component{
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e)=>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow:false,
        activeMarker: null
      });
    }
  };



  render(){
    return(
    <Map>
      
    </Map>)
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCYXV9CyepKeyRmluagytd-8y5pd3pT04k'
})(MapContainer);


/*
function App() {
  return (
    <div className="App">
      <iframe
        width="450"
        height="250"
        frameborder="0" style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/view
          ?key=AIzaSyCYXV9CyepKeyRmluagytd-8y5pd3pT04k
          &center=-33.8569,151.2152
          &zoom=18
          &maptype=satellite"
        allowfullscreen>
      </iframe>
    </div>
  );
}

export default App;
*/