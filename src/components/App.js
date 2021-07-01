import 'tailwindcss/tailwind.css';
import React, { useEffect, useState } from 'react';
import ArtPieces from './ArtPieces';
import axios from 'axios';

const App = () => {
  const [artData, setArtData] = useState([]);
  const [location, setLocation] = useState([]);

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

        //filter out data that does not have a primaryurl (won't be able to show the image)
        response = response.data.records.filter((records) => records.primaryimageurl !== null);

        setArtData(response);

        // make another request to grab location data
        // const objectIds = response.data.records.map((element) => element.id);
        // objectIds.forEach(async (id) => {
        //   const response2 = await axios(`https://api.harvardartmuseums.org/object/${id}`, {
        //     params: {
        //       apikey: process.env.REACT_APP_HARVARD_ART_API_KEY,
        //     },
        //   });
        //   setLocation((location) => [...location, response2]);
        // });
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
