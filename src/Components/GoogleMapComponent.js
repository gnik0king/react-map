import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps';

import { addressData } from './geolocation';


const mapStyles ={
    width:'75%',
    height: '75%',
    margin: 'auto'
  };
  
  
  export class GoogleMapComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cords: [
                // TODO: Read coordinates from json file -> success
                {latitude: 47.256129, longitude: -122.486119},
                {latitude: 47.336227, longitude: -122.333582},
                {latitude: 47.457076, longitude: -122.481267},
                {latitude: 47.573015, longitude: -122.218933},
                {latitude: 47.680378, longitude: -122.065119},
                {latitude: 47.646620, longitude: -121.921537},
            ]
        }
    }

    /*
    drawMarker = () => {
    return this.state.cords.map((store, i) => {
      return <Marker 
              key={i}
              id={i} 
              position={{
                lat: store.latitude,
                lng: store.longitude
     }}
     onClick={this.onMarkerClick} />
    })
    */

    drawMarker = () => {
      return (
        addressData.map((geolocation, key) => {
          return (
            <Marker
              key={key}
              id={key}
              position={{
                lat: geolocation.lat,
                lng: geolocation.lng
              }}
              onClick={this.onMarkerClick}
              />
          )
        })
      )
    }
  




 
  componentDidMount = () => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        this.setState({ currentLocation: pos, centerMarker: pos });
      }
    );
    const currentLoc = this.state.currentLocation;


  };



  render() {
    return (
        <Map
          google={this.props.google}
          style={mapStyles}
          zoom={15}
          initialCenter={{ 
            lat: 47.679947, 
            lng: -122.325473
        }}
        >
          {this.drawMarker()}
        
          
          
          <Marker
            title='this is you!!!!'
            name = {"you are here"}
            position = {this.state.currentLocation} 
            onMouseover={this.onMouseoverMarker}
            onClick={this.onMarkerClick}>
              <InfoWindow
                onClick={() => this.setState(state => ({open: !state.open}))}>
                  {"yo"}
              </InfoWindow>
            </Marker>
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCYXV9CyepKeyRmluagytd-8y5pd3pT04k'
  })(GoogleMapComponent);

/*

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
  })(MapContainer);*/