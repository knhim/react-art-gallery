import React from 'react';

const ArtPieces = ({ artData }) => {
  console.log(artData);
  if (artData && artData.data) {
    return (
      <>
        <h1>artcollection</h1>
        <img src={artData.data.records[0].images[0].baseimageurl} alt="hello" />
      </>
    );
  }
  console.log(artData);
  return <h1>loading...</h1>;
};

export default ArtPieces;
