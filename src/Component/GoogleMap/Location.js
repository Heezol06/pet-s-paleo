import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    height: "100%",
    width: "100%"
  }
  
  const center = {
    lat: 0,
    lng: -180
  }
  
  const position = {
    lat: 37.772,
    lng: -122.214
  }
  
  const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Location() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAZe84TgW70kFuFgoy-gqJBjgLZ7fLt-GA"
    >
        <GoogleMap
    id="marker-example"
    mapContainerStyle={mapContainerStyle}
    zoom={2}
    center={center}
  >
    <Marker
      onLoad={onLoad}
      position={position}
    />
  </GoogleMap>

    </LoadScript>
  )
}

export default React.memo(Location)