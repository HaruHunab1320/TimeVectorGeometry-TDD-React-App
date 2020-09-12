import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createIcosahedron } from '../store/icosahedrons/actions';

export const NewIcosahedronForm = ({ createIcosahedron }) => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    createIcosahedron(name).then(() => {
      setName('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Add Icosahedron"
        name="addIcosahedron"
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
    </form>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = { createIcosahedron };

export default connect(mapStateToProps, mapDispatchToProps)(NewIcosahedronForm);
