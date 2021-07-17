import ArtPiece from './ArtPiece';
import React, { useState } from 'react';

const ArtPieces = ({ artData, latLng }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOpen = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
          index={index}
          activeIndex={activeIndex}
          toggleOpen={toggleOpen}
        />
      );
    });
  }
  return <h1>loading...</h1>;
};

export default ArtPieces;
