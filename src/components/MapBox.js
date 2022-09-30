import * as React from 'react';
import Map from 'react-map-gl';

function MapBox() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiY29kZXNldmVuaWMiLCJhIjoiY2w4bzNqbzJ2MDQ5ZjNvcnVqNmN4MjB5aCJ9.W2XF1mM11gBo63oByB8KUw"
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default MapBox;
