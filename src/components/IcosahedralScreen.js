import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IcosahedralList from './IcosahedralList';

const IcosahedralScreen = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">Icosahedral Sequence Names</Typography>
      <IcosahedralList />
    </CardContent>
  </Card>
);

export default IcosahedralScreen;
