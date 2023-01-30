import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


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
                {latitude: 51.507351, longitude: -0.127758},
            {latitude: 31.046051, longitude: 34.851612},
           {latitude: 51.165691, longitude: 10.451526},
            {latitude: 52.215933, longitude: 19.134422},
            {latitude: 50.0874654, longitude: 14.4212535},
            {latitude: 7.5554942, longitude: 80.7137847},
            ]
        }
    }

    drawMarker = () => {
    return this.state.cords.map((store, i) => {
      return <Marker key={i} id={i} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
 
     onClick={() => console.log("Event Hanlder Called")} />
    })
  }
 
  render() {
    return (
        <Map
          google={this.props.google}
          style={mapStyles}
          zoom={6}
          initialCenter={{ 
            lat: 9.96233, 
            lng: 49.80404
        }}>
          {this.drawMarker()}
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