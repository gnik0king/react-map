import React from 'react';
import { ReactDOM } from 'react-dom';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '50%',
    height: '100%'
  }
};


export class CurrentLocation extends React.Component{
  
}

export default CurrentLocation;

/*
  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            isMarkerShown: true
          }))
        }
      )
    } else {
      error => console.log(error)
    }
  }
  */