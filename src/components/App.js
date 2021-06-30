import 'tailwindcss/tailwind.css';
import React, { useEffect, useState } from 'react';
import ArtPieces from './ArtPieces';
import ArtModal from './ArtModal';
import axios from 'axios';

const App = () => {
  const [artData, setArtData] = useState([]);
  const [location, setLocation] = useState([]);
  const [artModal, setArtModal] = useState(false);
  const [artModalDetails, setArtModalDetails] = useState([]);

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

        const objectIds = response.data.records.map((element) => element.id);
        objectIds.forEach(async (id) => {
          const response2 = await axios(`https://api.harvardartmuseums.org/object/${id}`, {
            params: {
              apikey: process.env.REACT_APP_HARVARD_ART_API_KEY,
            },
          });
          setLocation((location) => [...location, response2]);
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchArtData();
  }, []);

  if (artModal === true) {
    return (
      <div className="">
        <ArtModal artModalDetails={artModalDetails} setArtModal={setArtModal} />
        <h1>Art Gallery</h1>
        <ArtPieces artData={artData} />
      </div>
    );
  }

  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces
        artData={artData}
        setArtModal={setArtModal}
        setArtModalDetails={setArtModalDetails}
      />
    </>
  );
};

export default App;
