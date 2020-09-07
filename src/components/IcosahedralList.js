import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {loadIcosahedrons} from '../store/icosahedrons/actions';

export const IcosahedralList = ({ loadIcosahedrons, icosahedrons }) => {
  useEffect(() => {
    loadIcosahedrons();
  }, [loadIcosahedrons]);

  return (
    <List>
      {icosahedrons.map(icosahedron => (
        <ListItem key={icosahedron.id}>
          <ListItemText>
            {icosahedron.name}
          </ListItemText>
        </ListItem>
        ))}
    </List>
    );
  };

const mapStateToProps = state => ({
  icosahedrons : state.icosahedrons.records,
})

const mapDispatchToProps = {loadIcosahedrons};

export default connect(mapStateToProps, mapDispatchToProps)(IcosahedralList);
