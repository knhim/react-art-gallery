import React from 'react';

const ArtPiece = ({
  primaryimageurl,
  title,
  medium,
  dated,
  worktypes,
  dimensions,
  classification,
  setArtModal,
  setArtModalDetails,
}) => {
  if (primaryimageurl === null) {
    return null;
  }

  const handleClick = (e) => {
    setArtModal(true);
    setArtModalDetails({
      primaryimageurl,
      title,
      medium,
      dated,
      worktypes,
      dimensions,
      classification,
      setArtModal,
      setArtModalDetails,
    });
  };

  return (
    <>
      <div className="border-2 border-gray-500 mx-3 my-4" onClick={(e) => handleClick(e)}>
        <div className="flex justify-center">
          <img className="object-contain" src={primaryimageurl} alt={title} />
        </div>

        {/* <div className="p-2">
            <h1>{title}</h1>
            <p>{medium}</p>
            <p>{dated}</p>
            <p>{dimensions}</p>
          </div> */}
      </div>
    </>
  );
};

export default ArtPiece;
