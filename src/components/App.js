import 'tailwindcss/tailwind.css';
import React, { useEffect, useState } from 'react';
import ArtCollection from './ArtCollection';
import axios from 'axios';

const App = () => {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`https://api.harvardartmuseums.org/object?`, {
          params: {
            apikey: process.env.REACT_APP_HARVARD_ART_API_KEY,
            hasimage: 1,
            size: '25',
            copyright: 'null',
            classification: 'any',
            century: 'any',
            medium: 'any',
            sort: 'random',
            place: 'any',
          },
        });
        setArtData(response);
        console.log(artData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-red-500">hello</h1>
      <ArtCollection artData={artData} />
    </>
  );
};

export default App;
