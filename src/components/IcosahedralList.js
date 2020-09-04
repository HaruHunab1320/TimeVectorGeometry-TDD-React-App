import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {loadIcosahedrons} from '../store/icosahedrons/actions';

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

const mapStateToProps = state => ({
  icosahedrons : state.icosahedrons.records,
})

const mapDispatchToProps = {loadIcosahedrons};

export default connect(mapStateToProps, mapDispatchToProps)(IcosahedralList);
