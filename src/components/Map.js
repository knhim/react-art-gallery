import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map = ({ latLng, data }) => {
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [data.longitude, data.lattitude],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  });

  return <div id="map"></div>;
};

export default Map;
