import ArtPiece from './ArtPiece';
import React from 'react';

const ArtPieces = ({ artData, data }) => {
  let counter = 0;

  if (artData) {
    return artData.map((record) => {
      counter++;
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
          location={data[counter]}
        />
      );
    });
  }
  return <h1>loading...</h1>;
};

export default ArtPieces;
