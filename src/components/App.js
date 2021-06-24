import 'tailwindcss/tailwind.css';
import React, { useEffect, useState } from 'react';
import ArtPieces from './ArtPieces';
import ArtDescriptions from './ArtDescriptions';
import axios from 'axios';

const App = () => {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    const fetchArtData = async () => {
      try {
        const response = await axios(`https://api.harvardartmuseums.org/object?`, {
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
        setArtData(response);
        // const location = await artData.data.records.forEach((element) => console.log('hello'));
        // const location = await fetchArtLocation();
      } catch (err) {
        console.error(err);
      }
    };

    const fetchArtLocation = async () => {
      try {
        const response = await artData.data.records.forEach((element) => console.log('hello'));
      } catch (err) {
        console.error(err);
      }
    };

    fetchArtData();
    fetchArtLocation();
  }, []);

  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces artData={artData} />
      {/* <ArtDescriptions artData={artData} /> */}
    </>
  );
};

export default App;
