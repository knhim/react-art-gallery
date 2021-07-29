import React, { useState } from 'react';
import Map from './Map';

const ArtPiece = ({
  primaryimageurl,
  title,
  medium,
  dated,
  worktypes,
  dimensions,
  classification,
  latLng,
  toggleOpen,
  display,
  index,
  activeIndex,
}) => {
  if (primaryimageurl === null) {
    return null;
  }

  if (activeIndex === index && latLng === undefined) {
    return (
      <>
        <div
          className="border-2 border-gray-600 mx-3 my-4 lg:max-w-sm w-6/12 mx-auto"
          onClick={() => toggleOpen(index)}
        >
          <div className="flex justify-center">
            <img className="object-contain max-h-96" src={primaryimageurl} alt={title} />
          </div>

          <div className="p-2">
            <h1>{title}</h1>
            <p>Artist:</p>
            <p>{medium}</p>
            <p>{dated}</p>
            <p>{dimensions}</p>
          </div>

          <p className="mb-2 text-center italic">No map available</p>
        </div>
      </>
    );
  } else if (activeIndex === index) {
    return (
      <>
        <div
          className="border-2 border-gray-600 mx-3 my-4 lg:max-w-sm mx-auto"
          onClick={() => toggleOpen(index)}
        >
          <div className="flex justify-center">
            <img className="object-contain max-h-96" src={primaryimageurl} alt={title} />
          </div>

          <div className="p-2">
            <h1>{title}</h1>
            <p>Artist:</p>
            <p>{medium}</p>
            <p>{dated}</p>
            <p>{dimensions}</p>
          </div>

          <div>
            <Map latLng={latLng} />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="image-list border-2 border-gray-600 mx-3 my-4 lg:max-w-sm mx-auto"
        onClick={() => toggleOpen(index)}
      >
        <div className="flex justify-center">
          <img className="object-contain max-h-96" src={primaryimageurl} alt={title} />
        </div>
      </div>
    </>
  );
};

export default ArtPiece;
