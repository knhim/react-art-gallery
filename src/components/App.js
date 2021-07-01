import 'tailwindcss/tailwind.css';
import React, { useEffect, useState } from 'react';
import ArtPieces from './ArtPieces';
import axios from 'axios';

const App = () => {
  const [artData, setArtData] = useState([]);
  const [locations, setLocations] = useState([]);
  const [latLng, setLatLng] = useState([]);

  useEffect(() => {
    const fetchArtData = async () => {
      try {
        let response = await axios(`https://api.harvardartmuseums.org/object?`, {
          params: {
            apikey: process.env.REACT_APP_HARVARD_ART_API_KEY,
            hasimage: 1,
            size: '25',
            copyright: 'null',
            classification: 'Paintings',
            century: 'any',
            medium: 'any',
            sort: 'random',
            place: 'any',
          },
        });
        //filter out data that does not have a primaryurl
        response = response.data.records.filter((records) => records.primaryimageurl !== null);
        setArtData(response);

        // make another request to grab location data, using the objectId from the first request
        const objectIds = response.map((element) => element.id);
        const responseLocationArr = []; //created an array here to access it later for latLng coordinates

        objectIds.forEach(async (id) => {
          const responseLocations = await axios(`https://api.harvardartmuseums.org/object/${id}`, {
            params: {
              apikey: process.env.REACT_APP_HARVARD_ART_API_KEY,
            },
          });
          responseLocationArr.push(responseLocations);
          setLocations(responseLocationArr);
          // setLocations((locations) => [...locations, responseLocations]);
        });

        // api request to positionstack to convert location to latLng for maps later
        //array is empty so figure out what to do
        responseLocationArr.forEach(async (location) => {
          const latLngResponse = await axios(`http://api.positionstack.com/v1/forward?`, {
            params: {
              access_key: process.env.REACT_APP_POSITIONSTACK_API_KEY,
              query: 'sweden',
            },
          });
          setLatLng((latLng) => [...latLng, latLngResponse]);
          console.log(latLngResponse);
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchArtData();
  }, []);

  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces artData={artData} />
    </>
  );
};

export default App;
