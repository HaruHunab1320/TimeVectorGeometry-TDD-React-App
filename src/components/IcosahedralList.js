import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Alert from '@material-ui/lab/Alert';
import { loadIcosahedrons } from '../store/icosahedrons/actions';

export const IcosahedralList = ({
  loadIcosahedrons,
  icosahedrons,
  loading,
  loadError,
}) => {
  useEffect(() => {
    loadIcosahedrons();
  }, [loadIcosahedrons]);

  return (
    <>
      {loading && <CircularProgress data-testid="loading-indicator" />}
      {loadError && (
        <Alert severity="error">Icosahedrons could not be loaded.</Alert>
      )}
      <List>
        {icosahedrons.map(icosahedron => (
          <ListItem key={icosahedron.id}>
            <ListItemText>{icosahedron.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

const mapStateToProps = state => ({
  icosahedrons: state.icosahedrons.records,
  loading: state.icosahedrons.loading,
  loadError: state.icosahedrons.loadError,
});

const mapDispatchToProps = { loadIcosahedrons };

export default connect(mapStateToProps, mapDispatchToProps)(IcosahedralList);
