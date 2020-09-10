import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IcosahedralList from './IcosahedralList';
import NewIcosahedronForm from './NewIcosahedronForm';

const IcosahedralScreen = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">Icosahedral Sequence Names</Typography>
      <NewIcosahedronForm />
      <IcosahedralList />
    </CardContent>
  </Card>
);

export default IcosahedralScreen;
