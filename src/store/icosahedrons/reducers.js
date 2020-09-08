import {combineReducers} from 'redux';
import {START_LOADING, STORE_ICOSAHEDRONS} from './actions';

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_ICOSAHEDRONS:
      return action.records;
    default:
      return state;  
  }
};

const loading = (state = false, action) => {
  switch(action.type) {
    case START_LOADING:
      return true;
    case STORE_ICOSAHEDRONS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  records,
  loading,
})