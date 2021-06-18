import React from 'react';
import ArtDescription from './ArtDescription';

const ArtDescriptions = ({ artData }) => {
  if (artData && artData.data) {
    return artData.data.records.map((record) => {
      return (
        <ArtDescription
          key={record.id}
          title={record.title}
          medium={record.medium}
          dated={record.dated}
          worktypes={record.worktypes[0].worktype}
          dimensions={record.dimensions}
          classification={record.classification}
        />
      );
    });
  }
  return <h1>loading...</h1>;
};

export default ArtDescriptions;
