import React from 'react';

const ArtPiece = ({
  primaryimageurl,
  title,
  medium,
  dated,
  worktypes,
  dimensions,
  classification,
}) => {
  if (primaryimageurl === null) {
    return null;
  }

  return (
    <>
      <div className="border-2 border-gray-500 m-2">
        <img src={primaryimageurl} alt="hello" />
        <div className="p-2">
          <h1>{title}</h1>
          <p>{medium}</p>
          <p>{dated}</p>
          <p>{worktypes}</p>
          <p>{dimensions}</p>
          <p>{classification}</p>
        </div>
      </div>
    </>
  );
};

export default ArtPiece;
