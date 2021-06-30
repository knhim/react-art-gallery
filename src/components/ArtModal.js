import React from 'react';

const artModal = ({ artModalDetails, setArtModal }) => {
  return (
    <>
      <div className="border-2 border-gray-500 mx-3 my-4">
        <div className="flex justify-center">
          <img
            className="object-contain"
            src={artModalDetails.primaryimageurl}
            alt={artModalDetails.title}
          />
        </div>

        <div className="p-2">
          <h1>{artModalDetails.title}</h1>
          <p>{artModalDetails.medium}</p>
          <p>{artModalDetails.dated}</p>
          <p>{artModalDetails.dimensions}</p>
        </div>
        <button onClick={() => setArtModal(false)}>exit</button>
      </div>
    </>
  );
};

export default artModal;
