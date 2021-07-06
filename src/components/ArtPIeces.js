import ArtPiece from './ArtPiece';
import React, { useState } from 'react';

const ArtPieces = ({ artData, latLng }) => {
  const [display, setDisplay] = useState(false);

  const toggleCard = (e) => {
    setDisplay(!display);
  };

  if (artData) {
    return artData.map((record, index) => {
      return (
        <ArtPiece
          key={record.id}
          primaryimageurl={record.primaryimageurl}
          title={record.title}
          medium={record.medium}
          dated={record.dated}
          worktypes={record.worktypes[0].worktype}
          dimensions={record.dimensions}
          classification={record.classification}
          latLng={latLng[index]}
          toggleCard={toggleCard}
          display={display}
        />
      );
    });
  }
  return <h1>loading...</h1>;
};

export default ArtPieces;
