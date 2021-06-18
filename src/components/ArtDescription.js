import React from 'react';

const ArtDescription = ({ title, medium, dated, worktypes, dimensions, classification }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{medium}</p>
      <p>{dated}</p>
      <p>{worktypes}</p>
      <p>{dimensions}</p>
      <p>{classification}</p>
      <p>Creation Place </p>
    </>
  );
};

export default ArtDescription;
