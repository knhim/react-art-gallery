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
}) => {
  const [hideDescription, setHideDescription] = useState(true);

  if (primaryimageurl === null) {
    return null;
  }

  const handleClick = (e) => {
    setHideDescription(!hideDescription);
  };

  if (hideDescription === true) {
    return (
      <>
        <div className="border-2 border-gray-600 mx-3 my-4" onClick={(e) => handleClick(e)}>
          <div className="flex justify-center">
            <img className="object-contain" src={primaryimageurl} alt={title} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="border-2 border-gray-600 mx-3 my-4" onClick={(e) => handleClick(e)}>
        <div className="flex justify-center">
          <img className="object-contain" src={primaryimageurl} alt={title} />
        </div>

        <div className="p-2">
          <h1>{title}</h1>
          <p>Artist:</p>
          <p>{medium}</p>
          <p>{dated}</p>
          <p>{dimensions}</p>
        </div>

        <Map latLng={latLng} />
      </div>
    </>
  );
};

export default ArtPiece;
