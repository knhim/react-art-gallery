import ArtPiece from './ArtPiece';
import React from 'react';

const ArtPieces = ({ artData }) => {
  console.log(artData);

  if (artData && artData.data) {
    return artData.data.records.map((record) => {
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
        />
      );
    });
  }

  console.log(artData);
  return <h1>loading...</h1>;
};

export default ArtPieces;
