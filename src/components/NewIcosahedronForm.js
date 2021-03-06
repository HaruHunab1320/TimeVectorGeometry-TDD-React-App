import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { createIcosahedron } from '../store/icosahedrons/actions';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const NewIcosahedronForm = ({ createIcosahedron }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (name) {
      setValidationError(false);
      setServerError(false);
      createIcosahedron(name)
        .then(() => {
          setName('');
        })
        .catch(() => {
          setServerError(true);
        });
    } else {
      setValidationError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {serverError && (
        <Alert severity="error">
          The icosahedron could not be saved. Please try again.
        </Alert>
      )}
      {validationError && <Alert severity="error">Name is required</Alert>}
      <Box display="flex" className={classes.root}>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Add Icosahedron"
          // name="addIcosahedron"
          fullWidth
          variant="filled"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          data-testid="new-icosahedron-submit-button"
        >
          Add
        </Button>
      </Box>
    </form>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = { createIcosahedron };

export default connect(mapStateToProps, mapDispatchToProps)(NewIcosahedronForm);
