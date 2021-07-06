import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map = ({ latLng }) => {
  const mapRef = useRef(null);

  const style = {
    width: '100%',
    height: '150px',
  };

  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [latLng.latitude, latLng.longitude],
      zoom: 12,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  }, []);

  // add a marker
  const markerRef = useRef(null);
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng({ lat: latLng.latitude, lng: latLng.longitude });
    } else {
      markerRef.current = L.marker({ lat: latLng.latitude, lng: latLng.longitude }).addTo(
        mapRef.current
      );
    }
  });

  return <div id="map" style={style}></div>;
};

export default Map;
