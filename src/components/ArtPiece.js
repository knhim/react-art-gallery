import React from 'react';

const ArtPiece = ({ url, title, medium, dated, worktypes, dimensions, classification }) => {
  return (
    <>
      <div className="border-2 border-gray-500 m-2">
        <img src={url} alt="hello" />
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
