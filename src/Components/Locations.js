import React from 'react';

function LocationList() {
    const coords =[
        {name: 'Event A: {7100 E, 7100 East Green Lake Dr N, Seattle, WA 98115, USA}'},
        {name: 'Event B: {latitude: 47.336227, longitude: -122.333582}'},
        {name: 'Event C: {latitude: 47.457076, longitude: -122.481267}'},
        {name: 'Event D: {latitude: 47.573015, longitude: -122.218933}'},
        {name: 'Event E: TBD'},
        {name: 'Event E: TBD'}
    ];
  
    return (
        <ul>
        {coords.map(res => (
            <li>{res.name}</li>
        ))}
        </ul>
    );
  }

  export default LocationList;