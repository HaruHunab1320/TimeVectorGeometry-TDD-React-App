import React from 'react';
import {Provider} from 'react-redux';
import {createMuiTheme} from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import store from './store';
import IcosahedralScreen from './components/IcosahedralScreen';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Time Vector Geometry</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <IcosahedralScreen />
      </Container>
    </ThemeProvider>
  </Provider>    
);

export default App;
