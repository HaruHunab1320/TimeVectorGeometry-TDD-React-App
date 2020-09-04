import React, { useEffect } from 'react';

export const IcosahedralList = ({ loadIcosahedrons, icosahedrons }) => {
  useEffect(() => {
    loadIcosahedrons();
  }, [loadIcosahedrons]);

  return (
    <ul>
      {icosahedrons.map(icosahedron => (
        <li key={icosahedron.id}>{icosahedron.name}</li>
      ))}
    </ul>
  );
};
export default IcosahedralList;
