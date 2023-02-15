/*global google*/
import React, { Component } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

const mapStyles ={
    width:'75%',
    height: '75%',
    margin: 'auto'
  };


class Map01 extends Component {
    
    state = {
        directions: null,
        //markerPos: null,
        centerMarker:null,
        currentLocation: null
};





componentDidMount() {
    
    navigator?.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          const pos = { lat, lng };
          this.setState({ currentLocation: pos, centerMarker: pos });
        }
      );


    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: 47.679947, lng: -122.325473 };
    //const origin = this.state.currentLatLng;
    const destination = { lat: 47.256129, lng: -122.486119};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            //<------------- Used if more than one stop ------------->//
            /*
            waypoints: [
                {
                    location: new google.maps.LatLng(47.336227, -122.333582)
                },
                {
                    location: new google.maps.LatLng(47.457076, -122.481267)
                }
            ]
            */
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(result)
                this.setState({
                    directions: result
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        }
    );


    
}

render() {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={this.state.currentLocation}
            defaultZoom={15}
            center={this.state.currentLocation}
        >
            <DirectionsRenderer
                directions={this.state.directions}
            />
        </GoogleMap>
    ));

    return (
        <div>
            <GoogleMapExample
                containerElement={
                    <div style={{
                            height: `500px`, width: "75%", margin: 'auto' 
                        }} 
                    />}
                mapElement={
                    <div style={{
                            height: `100%` 
                        }} 
                    />}
            >
                <Marker
                    title = {"Hellooo"}
                    name = {"PLACE01"}
                    position = {{lat: 47.680378, lng: -122.065119}} 
                    onMouseover={this.onMouseoverMarker}
                    onClick={this.onMarkerClick}/>
            </GoogleMapExample>
        </div>


       );
    }
}

export default Map01;