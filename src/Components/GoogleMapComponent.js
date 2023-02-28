import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow, InfoBox} from 'google-maps-react';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps';

import { addressData } from './geolocation';


const mapStyles ={
    width:'50%',
    height: '100%'
  };
  
  
  export class GoogleMapComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,   // hides/shows the InfoWindow
            activeMarker:{},            // shows the active marker upon click
            selectedPlace:{},           // shows the InfoWindow to the selected place upon a marker


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


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


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

  
    // Draws markers using info from json file
    drawMarker = () => {
      return (
        addressData.map((geolocation, key) => {
          return (
            <Marker
              key={key}
              id={key}
              title={geolocation.name}
              name={geolocation.name}
              position={{
                lat: geolocation.lat,
                lng: geolocation.lng
              }}
              onClick={this.onMarkerClick}
              >
                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>
                    {this.state.selectedPlace.name}
                  </h4>
                </div>
              </InfoWindow>
              </Marker>
          )
        })
      )
    }

// Should show users current location 
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
    const onLoad = infoWindow => {
      console.log('infoWindow: ', infoWindow)
    }
    return (
        <Map
          google={this.props.google}
          style={mapStyles}
          zoom={15}
          onClick={this.onMarkerClick}
          initialCenter={{ 
            lat: 47.679947, 
            lng: -122.325473
        }}
        >
          {this.drawMarker()}
        
          
          
          <Marker
            title='Current Location'
            name = {'Current Location'}
            position = {this.state.currentLocation} 
            
            onClick={this.onMarkerClick}>
              <InfoBox
                position={this.state.currentLocation}
              >
                <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
                  <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                    Hello, World!
                  </div>
                </div>
              </InfoBox>
            </Marker>
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCYXV9CyepKeyRmluagytd-8y5pd3pT04k'
  })(GoogleMapComponent);

/*
<InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                onLoad={onLoad}
              >
                <div>
                  <h4>
                    {this.state.selectedPlace.name}
                  </h4>
                </div>
              </InfoWindow>
*/

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