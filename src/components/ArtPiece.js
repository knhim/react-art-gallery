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
          className="border-2 border-gray-600 mx-3 my-4 flex flex-col lg:w-3/12 lg:h-auto lg:m-auto lg:my-4"
          onClick={() => toggleOpen(index)}
        >
          <img
            className="object-contain max-h-96 lg:max-h-full"
            src={primaryimageurl}
            alt={title}
          />

          <div className="p-2">
            <h1>{title}</h1>
            <p>Artist:</p>
            <p>{medium}</p>
            <p>{dated}</p>
            <p>{dimensions}</p>
          </div>

          <div>
            <p className="mb-2 text-center italic">No map available</p>
          </div>
        </div>
      </>
    );
  } else if (activeIndex === index) {
    return (
      <>
        <div
          className="border-2 border-gray-600 mx-3 my-4 flex flex-col lg:w-3/12 lg:h-auto lg:m-auto lg:my-4"
          onClick={() => toggleOpen(index)}
        >
          <img
            className="object-contain max-h-96 lg:max-h-full"
            src={primaryimageurl}
            alt={title}
          />
          <div className="p-2">
            <h1>{title}</h1>
            <p>Artist:</p>
            <p>{medium}</p>
            <p>{dated}</p>
            <p>{dimensions}</p>
          </div>

          <div className="p-2">
            <Map latLng={latLng} />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="border-2 border-gray-600 mx-3 my-4 flex flex-col lg:w-3/12 lg:h-auto lg:m-auto lg:my-4"
        onClick={() => toggleOpen(index)}
      >
        <img className="object-contain max-h-96 lg:max-h-full" src={primaryimageurl} alt={title} />
      </div>
    </>
  );
};

export default ArtPiece;
