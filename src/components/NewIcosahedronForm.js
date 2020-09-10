import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const NewIcosahedronForm = ({ createIcosahedron }) => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    createIcosahedron(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Add Icosahedron"
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

export default NewIcosahedronForm;
