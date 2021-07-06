import ArtPiece from './ArtPiece';
import React from 'react';

const ArtPieces = ({ artData, latLng }) => {
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
        />
      );
    });
  }
  return <h1>loading...</h1>;
};

export default ArtPieces;
