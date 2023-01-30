import React, {useEffect, useRef} from 'react';

const GMap = () => {
    const googleMapRef = useRef(null);
    let googleMap = null;

    const iconList = {
        icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
    }

    const markerList = [
        {lat: 47.679947, lng: -122.325470, icon: iconList.icon1},
        {lat: 47.679947, lng: -122.325445, icon: iconList.icon1},
        {lat: 47.679947, lng: -122.325465, icon: iconList.icon1},
        {lat: 47.679947, lng: -122.325456, icon: iconList.icon1}
    ]

    useEffect(() => {
        googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        markerList.map(x => {
            const marker = createMarker(x);
            bounds.extend(marker.position);
        });
        googleMap.fitBounds(bounds);
    }, []);

    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
            center: {
                lat: 47.679947,
                lng: -122.325473
            },
            zoom: 14
        });
    }

    const createMarker = (markerObj) => new window.google.maps.Marker({
        position: {
            lat: markerObj.lat,
            lng: markerObj.lng
        },
        map: googleMap,
        icon: {
            url: markerObj.icon,
            scaledSize: new window.google.maps.Size(50, 50)
        }
    });

    return(
        <div
            ref={googleMapRef}
            style={{
                width: 500,
                height: 500,
                margin: '0 auto'
            }}
        />
    )
}

export default GMap;