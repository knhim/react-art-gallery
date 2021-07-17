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

  if (activeIndex === index) {
    return (
      <>
        <div className="border-2 border-gray-600 mx-3 my-4" onClick={() => toggleOpen(index)}>
          <div className="flex justify-center">
            <img className="object-contain w-full max-h-96" src={primaryimageurl} alt={title} />
          </div>

          <div className="p-2">
            <h1>{title}</h1>
            <p>Artist:</p>
            <p>{medium}</p>
            <p>{dated}</p>
            <p>{dimensions}</p>
          </div>

          <div className="">
            <Map latLng={latLng} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="border-2 border-gray-600 mx-3 my-4" onClick={() => toggleOpen(index)}>
        <div className="flex justify-center">
          <img className="object-contain w-full max-h-96" src={primaryimageurl} alt={title} />
        </div>
      </div>
    </>
  );
};

export default ArtPiece;
