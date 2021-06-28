import React from 'react';

const artModal = ({ primaryimageurl, title, medium, dated, dimensions, setArtModal }) => {
  return (
    <>
      <div className="border-2 border-gray-500 my-3">
        <div className="flex justify-center">
          <img className="object-contain" src={primaryimageurl} alt={title} />
        </div>

        <div className="p-2">
          <h1>{title}</h1>
          <p>{medium}</p>
          <p>{dated}</p>
          <p>{dimensions}</p>
        </div>
      </div>
    </>
  );
};

export default artModal;
