import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import IcosahedralScreen from './components/IcosahedralScreen';

const App = () => (
  <Provider store={store}>
    <IcosahedralScreen />
  </Provider>    
);

export default App;
