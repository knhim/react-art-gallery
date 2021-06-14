import React from 'react';

const ArtCollection = ({ artData }) => {
  console.log(artData);
  if (artData) {
    return (
      <>
        <h1>artcollection</h1>
        <img src={artData.data.records[0].images[0].baseimageurl} alt="hello" />
      </>
    );
  }
  return <h1>loading...</h1>;
};

export default ArtCollection;
