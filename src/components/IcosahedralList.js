import React, { useEffect } from 'react';

export const IcosahedralList = ({ loadIcosahedrons }) => {
  useEffect(() => {
    loadIcosahedrons();
  }, [loadIcosahedrons]);

  return <div>IcosahedralList</div>;
};
export default IcosahedralList;
