import ArtPiece from './ArtPiece';
import React from 'react';

const ArtPieces = ({ artData }) => {
  console.log(artData);

  if (artData && artData.data) {
    return artData.data.records.map((record) => {
      return <ArtPiece key={record.id} url={record.primaryimageurl} />;
    });
  }

  console.log(artData);
  return <h1>loading...</h1>;
};

export default ArtPieces;
